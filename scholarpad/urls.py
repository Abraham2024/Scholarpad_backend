from django.urls import path 
from . import views 
from .views import profile, upload_profile_pic
from django.conf.urls.static import static 
from django.conf import settings 
from django.contrib import admin 
from django.urls import path, re_path 
from .views import save_user_score

urlpatterns = [
         path("", views.index, name = "index"),
         path("login", views.login, name = "login"),
         path("signup",views.signup, name = "signup"),
         path("logout", views.logout, name = "logout"),
         path('profile/', profile, name='profile'),
         path('upload_profile_pic/', upload_profile_pic, name='upload_profile_pic'),
         path('combo', views.combo, name = "combo"),
    path('save_user_score/<str:quiz_identifier>/', save_user_score, name='save_user_score'),
    path("jamb", views.jamb, name = "jamb"),
    # ... other URLs

  ] 
  
if settings.DEBUG: 
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
