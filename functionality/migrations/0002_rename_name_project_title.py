# Generated by Django 3.2.7 on 2022-03-17 10:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('functionality', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='name',
            new_name='title',
        ),
    ]
