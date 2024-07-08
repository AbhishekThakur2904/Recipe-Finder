import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc ml-6 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
      <p className="mt-2">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
