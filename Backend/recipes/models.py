from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    ready_in_minutes = models.IntegerField()
    servings = models.IntegerField()
    diets = models.CharField(max_length=255)
    ingredients = models.TextField()
    image_url = models.URLField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title