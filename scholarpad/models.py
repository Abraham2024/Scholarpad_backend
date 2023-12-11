from django.contrib.auth.models import User
from django.db import models

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


class Quiz(models.Model):
    identifier = models.CharField(max_length=255, unique=True)
    # Add other fields specific to your Quiz model

class UserScore(models.Model):
    name = models.CharField(max_length=255)
    score = models.IntegerField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    date = models.DateField()


class HighScore(models.Model):
    username = models.CharField(max_length=255)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.username} - {self.score}"

