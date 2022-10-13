from rest_framework import serializers



class MessageSerializer(serializers.Serializer):
    created_at = serializers.DateTimeField()
    username = serializers.CharField(max_length=150)
    text = serializers.CharField(max_length=512)
