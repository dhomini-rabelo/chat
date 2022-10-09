from django.db.models import (Model, CharField, DateTimeField, TextField, EmailField, ForeignKey, PositiveIntegerField, ImageField, RESTRICT, DecimalField, DateField, BooleanField, SET_NULL, CASCADE, JSONField, ManyToManyField)
from apps.accounts.app.models import User



class Chat(Model):
    created_by = ForeignKey(User, on_delete=SET_NULL, null=True, related_name='created_chats')
    code = CharField(max_length=5, unique=True)
    image = CharField(max_length=100000000) # base64
    messages = JSONField() # MessagesType -> apps\chats\actions\models\chat\types.py
    users = ManyToManyField(User, related_name='chats')
    created_at = DateTimeField(auto_now_add=True)
