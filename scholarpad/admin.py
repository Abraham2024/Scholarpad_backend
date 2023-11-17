from django.contrib import admin
from .models import Feature
from .models import UserProfile
from .models import Quiz
from .models import UserScore

# Register your models here.
admin.site.register(Feature),
admin.site.register(UserProfile),
admin.site.register(Quiz),
admin.site.register(UserScore)

