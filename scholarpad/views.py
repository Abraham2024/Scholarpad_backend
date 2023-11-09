from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.http import HttpResponse 
from django.http import HttpResponseRedirect 
from django.contrib.auth.models import User,auth 
from django.contrib import messages
from .models import Feature

# Create your views here.

def index(request):
    features = Feature.objects.all()
    return render(request, 'index.html', {'features': features})

def signup(request):
     if request.method == 'POST':
         username = request.POST['username']
         email = request.POST['email']
         password = request.POST['password']
         password2 = request.POST['password2']

         if password == password2:
             if User.objects.filter(email = email).exists():
                 messages.info(request, 'Email has already been used' )
                 return redirect('signup')
             elif User.objects.filter(username = username).exists():
                 messages.info(request, 'Username already exists' )
                 return redirect('signup')

             else:
                 user = User.objects.create_user(username = username, email = email, password = password)
                 user.save;
                 return redirect('login')
         else:
             messages.info(request, 'Password is not the same')
             return redirect('signup')
     else:
         return render(request, 'signup.html')

def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username = username, password = password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Username or password is incorrect')
            return redirect('login')
    else:
        return render(request, 'login.html')

def logout(request):
     auth.logout(request)
     return redirect('/')

