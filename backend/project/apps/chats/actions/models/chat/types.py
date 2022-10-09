from datetime import datetime
from typing import TypedDict


class MessageType(TypedDict):
    user_id: int
    created_at: datetime
    text: str


class MessagesType(TypedDict):
    messages: list[MessageType]
    last_message: None | MessageType
