import React from 'react';
import MealCard from './Mealcard';

const MealPlanner = ({ meals, onAddMeal, onSavePlan, onLoadPlan }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meal Planner</h2>
      <div className="grid grid-cols-3 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">{day}</h3>
            <MealCard day={day} meals={meals[day]} onAddMeal={onAddMeal} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onSavePlan} className="bg-green-500 text-white p-2 rounded-lg">Save Plan</button>
        <button onClick={onLoadPlan} className="bg-blue-500 text-white p-2 rounded-lg">Load Plan</button>
      </div>
    </div>
  );
};

export default MealPlanner;
