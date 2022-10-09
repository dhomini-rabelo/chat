from django.db.models import (Model, CharField, DateTimeField, TextField, EmailField, ForeignKey, PositiveIntegerField, ImageField, RESTRICT, DecimalField, DateField, BooleanField, SET_NULL, CASCADE, JSONField, ManyToManyField)
from apps.accounts.app.models import User



class Chat(Model):
    created_by = ForeignKey(User, on_delete=SET_NULL, null=True, related_name='created_chats')
    code = CharField(max_length=5)
    image = CharField(max_length=100000000)
    messages = JSONField() # { messages -> [{ user_id, created, message }, ], last_message: { user_id, created, message } }
    users = ManyToManyField(User, related_name='chats')
    created_at = DateTimeField(auto_now_add=True)
