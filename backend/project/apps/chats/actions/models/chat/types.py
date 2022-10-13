from datetime import datetime
from typing import TypedDict


class MessageType(TypedDict):
    username: str
    text: str
    created_at: str


class MessagesType(TypedDict):
    messages: list[MessageType]
    last_message: None | MessageType


class try_add_message_response(TypedDict):
    was_success: bool
    errors: dict[str, list[str]]
    message: MessageType | None
