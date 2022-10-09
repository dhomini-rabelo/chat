from apps.chats.actions.api.chat.types import ChatValidatedDataType
from apps.chats.actions.models.chat.types import MessagesType
from apps.chats.app.models import Chat
from rest_framework import serializers


class ChatSerializer(serializers.ModelSerializer):
    code = serializers.CharField(max_length=5, required=False)

    def create(self, validated_data: ChatValidatedDataType):
        new_chat = Chat(**validated_data)
        new_chat.code = 'AB-123'
        new_chat.messages: MessagesType = {
            "messages": [],
            "last_message": None
        }
        new_chat.users.add(new_chat.created_by)
        new_chat.save()
        return new_chat

    class Meta:
        model = Chat
        fields = 'code', 'created_by', 'users', 'messages', 'created_at', 'image'