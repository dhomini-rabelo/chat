from django.urls import path
from . import api

urlpatterns = [
    path('create-user', api.CreateUserApi.as_view()),
]
