from django.db import models

# Create your models here.
class Room(models.Model):
    room_number = models.CharField(max_length=50)
    room_name = models.CharField(max_length=100)
    room_floor = models.IntegerField(default=0)