from django.shortcuts import render, redirect
from .models import Project, Contact
from .forms import ContactForm
from django.http import HttpResponse
from django.contrib import messages
# Create your views here.
def allFunctions(request):
    projects = Project.objects.all()
    return render(request, 'home.html', {'projects':projects})

def contactMe(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            cf = form.cleaned_data
            contform = Contact(
                name = cf['name'],
                email = cf['email'],
                message = cf['message']
            )
            contform.save()
            messages.success(request, 'Your message has been sent successfully!')
            
    else:
        form = ContactForm()
    return render(request, 'home.html', {'form':form})