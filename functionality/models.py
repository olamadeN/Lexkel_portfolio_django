from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=100)
    discription = models.TextField(max_length=700)
    thumbnail = models.ImageField(default='Vector (3).png')

    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField( max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email