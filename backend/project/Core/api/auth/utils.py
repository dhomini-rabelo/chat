from rest_framework_simplejwt.tokens import AccessToken
from apps.accounts import User

def get_user_from_token(token: str) -> User:
    access_token_obj = AccessToken(token)
    user_id = access_token_obj['user_id']
    user = User.objects.get(id=user_id)
    return user