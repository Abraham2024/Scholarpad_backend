# Generated by Django 4.2.6 on 2023-12-07 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scholarpad', '0003_quiz_userscore'),
    ]

    operations = [
        migrations.CreateModel(
            name='HighScore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=255)),
                ('score', models.IntegerField()),
            ],
        ),
    ]
