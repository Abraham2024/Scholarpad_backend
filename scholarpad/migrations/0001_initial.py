# Generated by Django 4.2.6 on 2023-11-07 18:29 
  
from django.db import migrations, models 
  

class Migration(migrations.Migration): 
  
     initial = True 
  
     dependencies = [ 
     ] 
  
     operations = [ 
         migrations.CreateModel( 
             name='Feature', 
             fields=[ 
                 ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')), 
                 ('name', models.CharField(max_length=100)), 
                 ('details', models.CharField(max_length=500)), 
             ], 
         ), 
     ]
