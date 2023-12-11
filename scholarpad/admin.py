from django.contrib import admin
from .models import Feature
from .models import UserProfile
from .models import Quiz
from .models import UserScore
from .models import HighScore,

# Register your models here.
admin.site.register(Feature),
admin.site.register(UserProfile),
admin.site.register(Quiz),
admin.site.register(HighScore),
admin.site.register(UserScore)

