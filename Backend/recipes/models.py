from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    ready_in_minutes = models.IntegerField()
    servings = models.IntegerField()
    diets = models.JSONField()
    ingredients = models.TextField()
    image = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title