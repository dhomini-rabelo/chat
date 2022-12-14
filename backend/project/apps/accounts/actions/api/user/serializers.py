from rest_framework import serializers
from apps.accounts.actions.api.user.types import CreateUserRequestBodyType, CreateUserValidatedDataType
from apps.accounts.app.models import User


class UserSerializer(serializers.ModelSerializer):

    def to_representation(self, instance: User):
        return {
            "username": instance.username,
        }
    
    def validate(self, validated_data: CreateUserValidatedDataType):
        initial_data: CreateUserRequestBodyType = self.initial_data
        if not initial_data.get('confirm_password'):
            raise serializers.ValidationError({'confirm_password': 'Este campo é obrigatório'})
        elif initial_data['confirm_password'] != validated_data['password']:
            raise serializers.ValidationError({'confirm_password': 'As senhas são diferentes'})
        return validated_data        

    def create(self, validated_data: CreateUserValidatedDataType):
        new_user = User(username=validated_data['username'])
        new_user.set_password(validated_data['password'])
        new_user.save()
        return new_user

    class Meta:
        model = User
        fields = 'username', 'password',