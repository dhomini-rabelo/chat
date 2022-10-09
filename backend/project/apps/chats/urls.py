from django.urls import path
from . import api

urlpatterns = [
    path('create-chat', api.CreateChatApi.as_view()),
]
