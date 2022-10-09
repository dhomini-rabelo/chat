from typing import Any
from rest_framework.permissions import IsAuthenticated, BasePermission
from apps.chats.actions.api.chat.serializers import ChatSerializer
from rest_framework import generics
from ..app.models import Chat


class CreateChatApi(generics.CreateAPIView):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()
    permission_classes: list[BasePermission] = [IsAuthenticated]

    def get_serializer(self, data: dict[str, Any]):
        new_data = data.copy()
        new_data['created_by'] = str(self.request.user.id)
        return super().get_serializer(data=new_data)
