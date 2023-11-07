from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.http import HttpResponse 
from django.http import HttpResponseRedirect 
from django.contrib.auth.models import User,auth 
from django.contrib import messages 
# Create your views here.

def index(request):
            return render(request, 'index.html')

