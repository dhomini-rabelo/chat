from datetime import datetime
from random import randint
from channels.generic.websocket import JsonWebsocketConsumer
from asgiref.sync import async_to_sync
from Core.api.auth.utils import get_user_from_token
from apps.chats.actions.models.chat.serializer import MessageSerializer
from apps.chats.actions.models.chat.types import MessageType
from apps.chats.app.models import Chat
from apps.chats.websockets.chat.types import new_connection_arg_type, new_message_arg_type, receive_json_content_arg_type, validation_connection_response_type

class ChatConsumer(JsonWebsocketConsumer):
    """
    This consumer is used to show user's online status,
    and send notifications.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.chat: Chat | None = None
        self.code: str | None = None
        self.tokens_from_users: dict[str, str] = {} # authenticated and connected users

    # CONNECTIONS

    def validate_connection(self, code: str) -> validation_connection_response_type:
        user_token = self.scope.get('query_string').decode('ascii').split('Authorization=')[::-1][0] if self.scope.get('query_string') else ''
        user = get_user_from_token(user_token)
        if user:
            chat = Chat.objects.filter(code=code)
            if chat:
                return {
                    "is_valid": True,
                    "user": user,
                    "chat": chat.first(),
                    "token": user_token,
                }
        return {
            "is_valid": False,
            "user": None,
            "chat": None,
            "token": None,
        }

    def connect(self):
        print(self.scope)
        self.code = self.scope['url_route']['kwargs'].get('code') or ''
        validation = self.validate_connection(self.code)
        if validation['is_valid']:
            self.accept()
            self.chat = validation["chat"]
            user = validation['user']
            self.tokens_from_users[user.username] = validation['token']
            async_to_sync(self.channel_layer.group_add)(
                self.chat.code,
                self.channel_name,
            )
            async_to_sync(self.channel_layer.group_send)(
                self.chat.code,
                {
                    "type": "new.connection",
                    "payload": {
                        "username": user.username, 
                    }
                },
            )
        else:
            self.close()
    
    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(
            self.code,
            self.channel_name,
        )

    # RECEIVE DATA

    def receive_json(self, content: receive_json_content_arg_type, **kwargs):
        username = self.get_username_from_token(content.get('token') or '')
        if username:
            serializer = MessageSerializer(data={'created_at': datetime.now(), 'username': username, 'text': content.get('text')})
            if serializer.is_valid():
                async_to_sync(self.channel_layer.group_send)(
                    self.chat.code,
                    {
                        "type": "new.message",
                        "payload": serializer.data,
                    },
                )
            else:
                self.send_json({
                    "type": "error",
                    "payload": {
                        "message": serializer.errors,
                    }
                })
        else:
            self.send_json({
                "type": "error",
                "payload": {
                    "message": 'Token inválido',
                }
            })


    # EVENTS

    def new_connection(self, event: new_connection_arg_type):
        print('event: ', event)
        self.send_json({
            "type": "new.connection",
            "payload": {
                "username": event["payload"]["username"]
            },
        })

    def new_message(self, event: new_message_arg_type):
        print('event: ', event)
        self.send_json({
            "type": "new.message",
            "payload": event['payload']
        })

    # SUPPORT

    def get_username_from_token(self, token) -> str | None:
        username_and_tokens: dict[str, str] = { v: k for k,v in self.tokens_from_users.items()}
        return username_and_tokens.get(token)