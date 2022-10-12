from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.exceptions import TokenError
from apps.accounts import User

def get_user_from_token(token: str) -> User | None:
    try:
        access_token_obj = AccessToken(token)
        user_id = access_token_obj['user_id'] 
        user = User.objects.get(id=user_id) # always return a valid user
        return user
    except TokenError:
        return None