from django.shortcuts import render
from rest_framework import  viewsets
from .serializers import ToDoSerializer
from .models import ToDo

# Create your views here.

class ToDoView(viewsets.ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()
