# RECIPEHUB 🍲

**RECIPEHUB** is an engaging website designed to explore a wide array of recipes. Powered by both the Spoonacular API and a Django backend, it offers detailed recipes, categorized tabs, and user-generated content. Dive into the world of cooking with features that cater to all your culinary needs!

## Table of Contents 📚

1. [Project Overview](#project-overview-)
2. [Features](#features-)
3. [Technologies Used](#technologies-used-)
4. [API Endpoints](#api-endpoints-)
5. [Getting Started](#getting-started-)
6. [Environment Variables](#environment-variables-)

## Project Overview 📝

**RECIPEHUB** is a recipe discovery platform that integrates with the Spoonacular API for fetching recipe data and uses a Django backend to manage user-submitted recipes and other application-specific data. Users can browse recipes by categories, search for specific dishes, and even post their own recipes to share with the community. The site is designed to be user-friendly and visually appealing, with easy navigation and interactive elements.

## Features 🌟

-   **Search 🔍:** Quickly find recipes using the search bar.
-   **Recipes by Categories 🍳:** Explore recipes organized into categories such as vegan, breakfast, and more.
-   **Post Recipes 📩:** Users can submit their own recipes and share them with others.

## Technologies Used 🛠️

-   **React ⚛️:** Frontend framework for building interactive user interfaces.
-   **Tailwind CSS 🌈:** Utility-first CSS framework for styling components.
-   **React Router DOM 🚀:** Library for handling routing and navigation.
-   **Heroicons 🖼️:** Icon set for UI elements.
-   **Spoonacular API 🍽️:** API for fetching recipe data.
-   **Django 🐍:** Backend framework for managing user-submitted recipes and other data.

## API Endpoints 🌐

### Spoonacular API 🍽️

-   **Get Random Recipes:**
    -   `GET https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY`
    -   Fetches a list of random recipes.
-   **Search Recipes:**

    -   `GET https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY`
    -   Allows searching for recipes based on query parameters.

-   **Get Recipe Details:**
    -   `GET https://api.spoonacular.com/recipes/{id}/information?apiKey=YOUR_API_KEY`
    -   Provides detailed information about a specific recipe.

### Django Backend 🐍

-   **General API Data:**

    -   `GET http://127.0.0.1:8000/api/get-api/`
    -   Retrieves general data from the Django backend.

-   **Manage Recipes:**
    -   `GET & POST http://127.0.0.1:8000/api/recipes/`
    -   Handles recipe data including user-submitted recipes.

## Getting Started 🚀

To get started with the RECIPEHUB frontend:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/deerah1234/recipehub.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd recipehub
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm start
    ```

5. **Open in Browser:**
   Navigate to `http://localhost:5137` to view the application.

For the Django backend:

1. **Navigate to the Backend Directory:**

    ```bash
    cd recipehub-backend
    ```

2. **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Run Migrations:**

    ```bash
    python manage.py migrate
    ```

4. **Start the Development Server:**

    ```bash
    python manage.py runserver
    ```

5. **Open in Browser:**
   Navigate to `http://127.0.0.1:8000` to view the backend API.

## Environment Variables 🔑

To securely manage API keys and other sensitive data, you need to set up environment variables.

1. **Create a `.env` File:**
   In the root of your Django project directory, create a file named `.env`.

2. **Add the API Key to the `.env` File:**

    ```plaintext
    SPOONACULAR_API_KEY=your_spoonacular_api_key_here
    ```

3. **Ensure `python-dotenv` is Installed:**
   Make sure `python-dotenv` is listed in your `requirements.txt` file or install it with:

    ```bash
    pip install python-dotenv
    ```

4. **Load Environment Variables:**
   The `load_dotenv()` function in your Django settings will automatically load these variables.
