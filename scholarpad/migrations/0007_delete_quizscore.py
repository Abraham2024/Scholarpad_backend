# Generated by Django 4.2.6 on 2023-12-31 07:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scholarpad', '0006_quizscore_delete_highscore_remove_userscore_quiz_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='QuizScore',
        ),
    ]