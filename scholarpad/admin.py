from django.contrib import admin
from .models import Feature
from .models import UserProfile

# Register your models here.
admin.site.register(Feature),
admin.site.register(UserProfile)
