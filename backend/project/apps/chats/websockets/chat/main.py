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
        self.chat = None
        self.user = None

    # CONNECTIONS

    def connect(self):
        code = self.scope['url_route']['kwargs']['code']
        self.chat = Chat.objects.get(code=code)
        # self.user = get_user_from_token, só aceita conexão com token, depois payload pega o username diretamente
        self.accept()
        self.send_json(
            {
                "type": "connect",
                "message": f"connected at {self.chat.code}",
            }
        )
        async_to_sync(self.channel_layer.group_add)(
                self.chat.code,
                self.channel_name,
        )
        async_to_sync(self.channel_layer.group_send)(
                self.chat.code,
                {
                    "type": "new.connection",
                    "payload": {
                        "user": f"user {randint(1, 50)} connected"
                    }
                },
        )
    
    def disconnect(self, code):
         async_to_sync(self.channel_layer.group_add)(
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
            "payload": event['payload']['message']
        })