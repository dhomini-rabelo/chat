from random import randint
from apps.accounts.app.models.user import User
from apps.chats.actions.models.chat.serializer import MessageSerializer
from apps.chats.actions.models.chat.types import MessageType, MessagesType, try_add_message_response
from apps.chats.app.models.chat import Chat
from .support import ascii_letters, digits
from datetime import datetime

class ChatController:

    def __init__(self, chat: Chat):
        self.chat = chat

    @staticmethod
    def generate_code() -> str:

        def get_random_letters(quantity: int):
            return ''.join([ascii_letters[randint(0, len(ascii_letters) - 1)] for i in range(0, quantity)])

        def get_random_numbers(quantity: int):
            return ''.join([digits[randint(0, len(digits) - 1)] for i in range(0, quantity)])

        code = f'{get_random_letters(2)}-{get_random_numbers(3)}'
        code_exists = Chat.objects.filter(code=code).exists()

        while code_exists:
            code = f'{get_random_letters(2)}-{get_random_numbers(3)}'
            code_exists = Chat.objects.filter(code=code).exists()

        return code

    def user_is_registered(self, user: User) -> bool:
        return self.chat.users.filter(id=user.id).exists()

    def register_user(self, user: User) -> bool:
        if not self.user_is_registered(user):
            self.chat.users.add(user)
            return True
        return False

    def try_add_message(self, username: str, text: str) -> try_add_message_response:
        serializer = MessageSerializer(data={'created_at': datetime.now(), 'username': username, 'text': text})
        if serializer.is_valid():
            serialized_message: MessageType = serializer.data
            messages: MessagesType = {
                'messages': [
                    *self.get_latest_messages(),
                    serialized_message,
                ],
                'last_message': serialized_message,                
            }
            self.chat.messages = messages
            self.chat.save()
            return {
                'was_success': True,
                'errors': {},
                'message': serialized_message,
            }
        else:
            return {
                'was_success': False,
                'errors': serializer.errors,
                'message': None,
            }

    def get_latest_messages(self) -> list[MessageType]:
        return Chat.objects.get(code=self.chat.code).messages['messages']



    
