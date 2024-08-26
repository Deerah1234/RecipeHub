from django.urls import path, include
from rest_framework import routers
from .views import RecipeViewSet, AnotherApiListView

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipes')

urlpatterns = [
    path('', include(router.urls)),
    path('get-api/', AnotherApiListView.as_view(), name='get-api'),
]

