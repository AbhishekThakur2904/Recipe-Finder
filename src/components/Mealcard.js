import React from 'react';

const MealCard = ({ day, meals, onAddMeal }) => {
  return (
    <div>
      {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
        <div key={mealType} className="mb-4">
          <h4 className="text-md font-semibold">{mealType}</h4>
          <div className="border rounded-lg p-2">
            {meals && meals[mealType] ? (
              <div>
                <img src={meals[mealType].image} alt={meals[mealType].title} className="w-full h-24 object-cover rounded-lg mb-2" />
                <p>{meals[mealType].title}</p>
              </div>
            ) : (
              <button onClick={() => onAddMeal(day, mealType)} className="bg-yellow-500 text-white p-2 rounded-lg">Add Meal</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealCard;
