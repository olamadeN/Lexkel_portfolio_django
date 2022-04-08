from django.urls import path
from . import views

app_name = "functionality"

urlpatterns = [
    path('/', views.allFunctions, name='functions'),
    path('contact-form/', views.contactMe, name='contact-form')
    
]
