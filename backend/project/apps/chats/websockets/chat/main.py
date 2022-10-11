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

    def connect(self):
        code = self.scope['url_route']['kwargs']['code']
        self.chat = Chat.objects.get(code=code)
        print(self.chat)
        self.accept()
        self.send_json(
            {
                "type": "connect",
                "message": f"connected at {self.chat.code}",
            }
        )
        async_to_sync(self.channel_layer.group_send)(
                self.chat.code,
                {
                    "type": "chat.message",
                    "payload": "oi"
                },
        )
        #

    def disconnect(self, code):
        print("Disconnected!")
        return super().disconnect(code)

    def receive_json(self, content, **kwargs):
        print(content)
        async_to_sync(self.channel_layer.group_send)(
                self.chat.code,
                {
                    "type": "chat.message",
                    "payload": content
                },
        )
        # return super().receive_json(content, **kwargs)

    def chat_message(self, event):
        print('event', event)
        self.send_json({
            "a": "b"
        })