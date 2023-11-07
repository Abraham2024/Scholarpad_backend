from django.urls import path 
from . import views 
from django.conf.urls.static import static 
from django.conf import settings 
from django.contrib import admin 
from django.urls import path, re_path 

urlpatterns = [
         path("", views.index, name = "index"),

  ] 
  
if settings.DEBUG: 
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
