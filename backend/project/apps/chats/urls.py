from django.urls import path
from . import api

urlpatterns = [
    path('create-chat', api.CreateChatAPI.as_view()),
    path('chats/<str:username>', api.ListChatsFromUserAPI.as_view()),
    path('chat-detail/<str:code>', api.ChatDetailAPI.as_view()),
    path('register-user-in-chat/<str:code>', api.RegisterUserInChat.as_view()),
]
