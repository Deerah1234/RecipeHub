from rest_framework import viewsets, generics
from rest_framework.response import Response
import requests
from dotenv import load_dotenv
import os
from .models import Recipe
from .serializers import RecipeSerializer


load_dotenv()

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=400)

    def list(self, request):
        try:
            queryset = self.filter_queryset(self.get_queryset())
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response({"error": str(e)}, status=400)

class AnotherApiListView(generics.ListAPIView):
    def get(self, request):
        api_key = os.environ.get('SPOONACULAR_API_KEY')
        if not api_key:
            return Response({'error': 'API key is not set'}, status=500)

        try:
            response = requests.get(f"https://api.spoonacular.com/recipes/random?apiKey={api_key}&number=10")
            response.raise_for_status()
            spoonacular_data = response.json()
            return Response(spoonacular_data, status=200)
        except requests.exceptions.RequestException as e:
            return Response({'error': str(e)}, status=500)
