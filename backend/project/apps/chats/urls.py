from django.urls import path
from . import api

urlpatterns = [
    path('create-chat', api.CreateChatApi.as_view()),
    path('chats/<int:user_id>', api.ListChatsFromUserApi.as_view()),
]
