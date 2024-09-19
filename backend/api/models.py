from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Create your models here.

class CustomUser(AbstractUser):
    # Add any additional fields if needed
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Change this to avoid clashes
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Change this to avoid clashes
        blank=True,
    )
