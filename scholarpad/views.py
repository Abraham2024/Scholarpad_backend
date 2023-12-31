from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.http import HttpResponse 
from django.http import HttpResponseRedirect 
from django.contrib.auth.models import User,auth 
from django.contrib import messages
from .models import Feature
from .models import UserProfile
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

def index(request):
    features = Feature.objects.all()
    return render(request, 'index.html', {'features': features})
from .models import UserProfile  # Import your UserProfile model

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        secret_question = request.POST['secret_question']
        secret_answer = request.POST['secret_answer']
        password = request.POST['password']
        password2 = request.POST['password2']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        state = request.POST['state']
        phone_number = request.POST['phone_number']

        if password == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email has already been used' )
                return redirect('signup')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username already exists' )
                return redirect('signup')
            else:
                user = User.objects.create_user(
                    username=username,
                    email=email,
                    password=password
                )

                UserProfile.objects.create(
                    user=user,
                    first_name=first_name,
                    last_name=last_name,
                    state = state,
                    phone_number = phone_number,
                    secret_question = secret_question,
                    secret_answer = secret_answer,

                )
                messages.info(request, 'Account created succesfully')

                subject = "welcome to Scholarpad"
                message = "We are glad to have you here with us!"

                send_mail(
                        subject,
                        message,
                        settings.EMAIL_HOST_USER,
                        [user.email],
                        fail_silently=False
                        )

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

def jamb(request):
    return render(request, "jamb.html")

def games(request):
    return render(request, "games.html")
def combo(request):
    return render(request, "combo.html")



