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
