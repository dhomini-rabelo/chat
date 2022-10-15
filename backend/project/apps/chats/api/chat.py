from typing import Any
from rest_framework.permissions import IsAuthenticated, BasePermission
from apps.accounts.app.models.user import User
from apps.chats.actions.api.chat.serializers import ChatSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from apps.chats.actions.models.chat.controller import ChatController
from ..app.models import Chat
from django.http import HttpRequest


class CreateChatAPI(generics.CreateAPIView):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()

    def get_serializer(self, data: dict[str, Any]):
        new_data = data.copy()
        new_data['created_by'] = str(self.request.user.id)
        return super().get_serializer(data=new_data)


class ListChatsFromUserAPI(APIView):

    def get(self, request: HttpRequest, username: str):
        user = get_object_or_404(User.objects.prefetch_related('chats'), username=username)
        serializer = ChatSerializer(user.chats.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class ChatDetailAPI(APIView):

    def get(self, request: HttpRequest, code: str):
        chat = get_object_or_404(Chat.objects.filter(code=code).select_related('created_by').prefetch_related('users'), code=code)
        serializer = ChatSerializer(chat)
        return Response(serializer.data, status=status.HTTP_200_OK)



class RegisterUserInChat(APIView):

    def post(self, request: HttpRequest, code: str):
        chat = Chat.objects.filter(code=code).prefetch_related('users').first()
        if chat:
            controller = ChatController(chat)
            was_success = controller.register_user(request.user)
            if was_success:
                return Response(None, status=status.HTTP_200_OK)
            else:
                return Response({'Message': 'Usuário já registrado nesse chat'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Message': 'Chat não encontrado'}, status=status.HTTP_400_BAD_REQUEST)
