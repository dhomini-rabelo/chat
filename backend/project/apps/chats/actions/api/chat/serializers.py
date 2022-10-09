from apps.accounts.app.models.user import User
from apps.chats.actions.api.chat.types import ChatValidatedDataType
from apps.chats.actions.models.chat.controller import ChatController
from apps.chats.actions.models.chat.types import MessagesType
from apps.chats.app.models import Chat
from rest_framework import serializers


class UserForChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = 'username',


class ChatSerializer(serializers.ModelSerializer):
    created_by = UserForChatSerializer()
    code = serializers.CharField(max_length=5, required=False)
    messages = serializers.JSONField(required=False)
    users = UserForChatSerializer(many=True, required=False)

    def create(self, validated_data: ChatValidatedDataType):
        new_chat = Chat(**validated_data)
        new_chat.code = ChatController.generate_code()
        new_chat.messages: MessagesType = {
            "messages": [],
            "last_message": None
        }
        new_chat.save()
        new_chat.users.add(new_chat.created_by)
        new_chat.save()
        return new_chat

    class Meta:
        model = Chat
        fields = 'code', 'created_by', 'users', 'messages', 'created_at', 'image'


