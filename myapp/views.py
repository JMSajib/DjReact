from django.shortcuts import render
from rest_framework import generics
from .serializers import UserModelSerializer
from .models import UserModel
# Create your views here.

class UserListAPIView(generics.ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer
