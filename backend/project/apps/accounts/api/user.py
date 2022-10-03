from rest_framework import generics
from apps.accounts.api.serializer import UserSerializer
from ..app.models import User


class CreateUserApi(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []
