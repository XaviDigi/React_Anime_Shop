from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, get_user_model
from .serializers import UserSerializer, LoginSerializer  # Import the LoginSerializer

# Create your views here.

User = get_user_model()  # Get the User model

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer  # Add this line

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Validate the data
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        user = authenticate(username=username, password=password)
        if user is not None:
            return Response({'message': 'Login successful!'})
        return Response({'error': 'Invalid credentials'}, status=400)
