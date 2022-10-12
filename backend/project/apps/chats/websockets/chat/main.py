from random import randint
from channels.generic.websocket import JsonWebsocketConsumer
from asgiref.sync import async_to_sync
from apps.chats.app.models import Chat

class ChatConsumer(JsonWebsocketConsumer):
    """
    This consumer is used to show user's online status,
    and send notifications.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.chat: Chat | None = None
        self.tokens_from_users: dict[str, str] = {} # authenticated and connected users

    # CONNECTIONS

    def connect(self):
        code = self.scope['url_route']['kwargs']['code']
        # user_token = self.scope['headers']['Authorization']
        self.chat = Chat.objects.get(code=code)
        self.user = f"user {randint(1, 50)}"
        self.accept()
        async_to_sync(self.channel_layer.group_add)(
            self.chat.code,
            self.channel_name,
        )
        self.send_json({
            "type": "connect",
            "payload": {
                "connected": True
            }
        })
        async_to_sync(self.channel_layer.group_send)(
            self.chat.code,
            {
                "type": "new.connection",
                "payload": {
                    "user": f"{self.user} connected"
                }
            },
        )
    
    def disconnect(self, code):
         async_to_sync(self.channel_layer.group_discard)(
            self.chat.code,
            self.channel_name,
        )

    # RECEIVE DATA

    def receive_json(self, content, **kwargs):
        print('receive_json: ', content)
        async_to_sync(self.channel_layer.group_send)(
            self.chat.code,
            {
                "type": "new.message",
                "payload": content
            },
        )

    # EVENTS

    def new_connection(self, event):
        print('event: ', event)
        self.send_json({
            "type": "new.connection",
            "payload": event['payload']['user'],
        })

    def new_message(self, event):
        print('event: ', event)
        self.send_json({
            "type": "new.message",
            "payload": {
                "user": "",
                "message": event['payload']['message'],
            }
        })