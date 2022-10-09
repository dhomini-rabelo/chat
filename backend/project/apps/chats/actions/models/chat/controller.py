from random import randint
from apps.chats.app.models.chat import Chat
from .support import ascii_letters, digits

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
    
