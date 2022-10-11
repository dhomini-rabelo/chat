from apps.chats.websockets.chat.main import ChatConsumer
from django.urls import path


websocket_urlpatterns = [
    path('chats/<str:code>', ChatConsumer.as_asgi())
]