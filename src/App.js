import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import RecipeList from './components/Recipelist';
import RecipeDetail from './components/Recipedetail';
import MealPlanner from './components/Mealplanner';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealPlan, setMealPlan] = useState({});

  const handleSearch = async (query) => {
    const apiKey = 'd9bf504be5b64f7d9c4777db28b852c5'; // Replace with your API key
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    setRecipes(data.results);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleAddMeal = (day, mealType) => {
    const newMealPlan = { ...mealPlan };
    if (!newMealPlan[day]) newMealPlan[day] = {};
    newMealPlan[day][mealType] = selectedRecipe;
    setMealPlan(newMealPlan);
  };

  const handleSavePlan = () => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  };

  const handleLoadPlan = () => {
    const savedPlan = JSON.parse(localStorage.getItem('mealPlan'));
    setMealPlan(savedPlan || {});
  };

  return (
    <div className="container mx-auto">
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
      <RecipeDetail recipe={selectedRecipe} />
      <MealPlanner
        meals={mealPlan}
        onAddMeal={handleAddMeal}
        onSavePlan={handleSavePlan}
        onLoadPlan={handleLoadPlan}
      />
    </div>
  );
};

export default App;
