from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .user import CreateUserApi

@api_view(['GET'])
def hello_world(request):
    return Response({
        "hello": "world"
    }, status=status.HTTP_200_OK)