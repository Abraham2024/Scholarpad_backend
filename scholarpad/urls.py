from django.urls import path
from . import views 
from django.conf.urls.static import static 
from django.conf import settings 
from django.contrib import admin 
from django.urls import path, re_path
from django.contrib.auth import views as auth_views


urlpatterns = [
         path("", views.index, name = "index"),
         path("login", views.login, name = "login"),
         path("signup",views.signup, name = "signup"),
         path("logout", views.logout, name = "logout"),
         path("reset_password/", auth_views.PasswordResetView.as_view(template_name = "reset_password.html"), name = "reset_password"),
         path("reset_password_sent/", auth_views.PasswordResetDoneView.as_view(template_name = "reset_password_sent.html"), name = "password_reset_done"),
         path("reset/<uidb64>/<token>/", auth_views.PasswordResetConfirmView.as_view(template_name = "password_reset_confirm.html"), name = 'password_reset_confirm'), 
         path("reset_password_complete/", auth_views.PasswordResetCompleteView.as_view(), name = "password_reset_complete"),
         path("games", views.games, name = "games"),
         path('combo', views.combo, name = "combo"),
    path("jamb", views.jamb, name = "jamb"),

    # ... other URLs

  ] 
  
if settings.DEBUG: 
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
