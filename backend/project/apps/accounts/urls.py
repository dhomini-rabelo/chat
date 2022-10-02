from django.urls import path
from . import api

urlpatterns = [
    path('hello', api.hello_world),
]
