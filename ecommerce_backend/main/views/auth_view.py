# main/views/auth_view.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers.auth_serializer import RegisterSerializer, LoginSerializer
from ..models import UserProfile
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status, views
from django.contrib.auth import authenticate

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class LoginView(views.APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                "message": "Login successful",
                "username": user.username,
                "role": "admin" if user.is_staff else "customer",
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            })
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
