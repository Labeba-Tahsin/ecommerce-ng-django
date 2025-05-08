
# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    ROLE_CHOICES = (
        ('customer', 'Customer'),
        ('admin', 'Admin'),  # optional
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')

    def __str__(self):
        return f"{self.user.username} - {self.role}"


class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey(
        'self',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='subcategories'
    )

    def __str__(self):
        return self.name
    
class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.title