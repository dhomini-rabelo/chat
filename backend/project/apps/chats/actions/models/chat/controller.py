from random import randint
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

    def try_add_message(self, username: str, text: str) -> try_add_message_response:
        serializer = MessageSerializer(data={'created_at': datetime.now(), 'username': username, 'text': text})
        if serializer.is_valid():
            serializer_data: MessageType = serializer.data
            messages: MessagesType = {
                'messages': [
                    *self.chat.messages['messages'],
                    serializer_data,
                ],
                'last_message': serializer_data,                
            }
            self.chat.messages = messages
            self.chat.save()
            return {
                'was_success': True,
                'errors': {},
                'message': serializer_data,
            }
        else:
            return {
                'was_success': False,
                'errors': serializer.errors,
                'message': None,
            }


    
