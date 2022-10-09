from typing import Any
from rest_framework.permissions import IsAuthenticated, BasePermission
from apps.accounts.app.models.user import User
from apps.chats.actions.api.chat.serializers import ChatSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from ..app.models import Chat


class CreateChatApi(generics.CreateAPIView):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()

    def get_serializer(self, data: dict[str, Any]):
        new_data = data.copy()
        new_data['created_by'] = str(self.request.user.id)
        return super().get_serializer(data=new_data)


class ListChatsFromUserApi(APIView):

    def get(self, request, user_id: int):
        user = get_object_or_404(User.objects.prefetch_related('chats'), id=user_id)
        serializer = ChatSerializer(user.chats.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

