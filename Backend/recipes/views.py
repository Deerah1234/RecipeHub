import os
from django.http import JsonResponse
from django.views import View
import requests

class RecipeListView(View):
    def get(self, request):
        api_key = os.environ['SPOONACULAR_API_KEY']
        url = f'https://api.spoonacular.com/recipes/random?apiKey={api_key}&number=10'
        response = requests.get(url)
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Failed to fetch data from Spoonacular API'}, status=500)