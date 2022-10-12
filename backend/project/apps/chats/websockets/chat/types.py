from typing import TypedDict
from apps.chats.app.models import Chat
from apps.accounts import User



class validation_connection_response_type(TypedDict):
    is_valid: bool
    chat: None | Chat
    user: None | User
    token: None | str



class new_connection_payload_partial_arg_type(TypedDict):
    username: str

class new_connection_arg_type(TypedDict):
    type: str
    payload: new_connection_payload_partial_arg_type