import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-lg p-4" onClick={() => onSelect(recipe)}>
          <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-lg mb-2" />
          <h2 className="text-lg font-bold">{recipe.title}</h2>
          <p className="text-sm text-gray-500">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
