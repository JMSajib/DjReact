from django.db import models

# Create your models here.
class UserModel(models.Model):
    name = models.CharField(max_length=120)
    varsity = models.CharField(max_length=120)

    def __str__(self):
        return self.name
