# main/serializers/auth_serializer.py

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from ..models import UserProfile

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        user.is_staff = False
        user.is_superuser = False
        user.save()

        UserProfile.objects.create(user=user, role='customer')
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user and not user.is_staff:
            return user
        raise serializers.ValidationError("Invalid credentials or unauthorized access.")
