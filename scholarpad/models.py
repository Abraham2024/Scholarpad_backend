from django.contrib.auth.models import User
from django.db import models

#create your models here

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

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
    user = models.CharField(max_length=255)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.user} - {self.score}"

