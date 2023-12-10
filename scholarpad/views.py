from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.http import HttpResponse 
from django.http import HttpResponseRedirect 
from django.contrib.auth.models import User,auth 
from django.contrib import messages
from .models import Feature
from .models import UserProfile
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserScore, Quiz
import json
from .models import HighScore

def save_user_score(request, quiz_identifier):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        name = data.get('name')
        score = data.get('score')
        date = data.get('date')

        # Get or create the quiz based on the identifier
        quiz, created = Quiz.objects.get_or_create(identifier=quiz_identifier)

        user_score = UserScore(name=name, score=score, quiz=quiz, date=date)
        user_score.save()

        return JsonResponse({'message': 'User score saved successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})

# Create your views here.
def combo(request):
    return render(request, 'combo.html')


def index(request):
    features = Feature.objects.all()
    return render(request, 'index.html', {'features': features})
from .models import UserProfile  # Import your UserProfile model

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
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

                )
                messages.info(request, 'Account created succesfully')

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

def profile(request):
    user_profile = UserProfile.objects.get(user=request.user)
    return render(request, 'profile.html', {'user_profile': user_profile})

def upload_profile_pic(request):
    if request.method == 'POST':
        user_profile = UserProfile.objects.get(user=request.user)
        user_profile.profile_picture = request.FILES['profile_pic']
        user_profile.save()
    return redirect('profile')


def jamb(request):
    return render(request, "jamb.html")

def games(request):
    return render(request, "games.html")

def display_high_scores(request):
    high_scores = HighScore.objects.all().order_by('-score')[:10]  # Get top 10 scores
    return render(request, 'high_scores.html', {'high_scores': high_scores})

def store_high_score(request):
    if request.method == 'POST':
        user = request.POST.get('user')
        score = request.POST.get('score')
        HighScore.objects.create(user=user, score=score)
    return redirect('display_high_scores')

