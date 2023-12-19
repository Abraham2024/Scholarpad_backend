from django.contrib.auth.models import User
# models.py
from django.db import models

class QuizScore(models.Model):
    username = models.CharField(max_length=50)
    score = models.IntegerField()


#create your models here

class UserProfile(models.Model):
    SECRET_QUESTION_CHOICES = [
        ('q1', 'What is your favorite color?'),
        ('q2', 'In which city were you born?'),
        ('q3', 'What is the name of your best friend?'),
        # Add more questions as needed
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    first_name = models.CharField(max_length=30) 
    last_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=15)  # Adjust max_length as needed
    state = models.CharField(max_length=50)  # Adjust max_length as needed
    secret_question = models.CharField(max_length=2, choices=SECRET_QUESTION_CHOICES, blank=True, null=True)
    secret_answer = models.CharField(max_length=100)  # Adjust max_length as needed


class Feature(models.Model):
     name =  models.CharField(max_length=100)
     details = models.CharField(max_length=500)


