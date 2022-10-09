from apps.accounts.app.models.user import User
from typing import TypedDict



class ChatValidatedDataType(TypedDict):
    created_by: User
    code: None
    image: str
    messages: None
    users: None
