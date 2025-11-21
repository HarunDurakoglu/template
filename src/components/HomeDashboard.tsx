import { Plus, Apple } from 'lucide-react';

interface HomeDashboardProps {
  onAddMeal: () => void;
  onViewMeals: () => void;
}

export function HomeDashboard({ onAddMeal, onViewMeals }: HomeDashboardProps) {
  const calories = {
    consumed: 1456,
    target: 2000,
    remaining: 544,
  };

  const macros = {
    protein: { value: 82, max: 150, color: '#4CAF50' },
    carbs: { value: 145, max: 200, color: '#66BB6A' },
    fat: { value: 48, max: 65, color: '#81C784' },
  };

  const meals = [
    { id: 1, name: 'Avocado Toast', time: '8:30 AM', calories: 320, type: 'Breakfast' },
    { id: 2, name: 'Greek Salad Bowl', time: '12:45 PM', calories: 420, type: 'Lunch' },
    { id: 3, name: 'Protein Smoothie', time: '3:20 PM', calories: 285, type: 'Snack' },
    { id: 4, name: 'Grilled Chicken', time: '7:15 PM', calories: 431, type: 'Dinner' },
  ];

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Header */}
      <div className="px-6 py-6 bg-card border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-muted-foreground">Friday, Nov 21</p>
            <h2>Today's Progress</h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Apple className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto pb-20">
        {/* Calorie Ring */}
        <div className="px-6 py-6">
          <div className="bg-card rounded-[16px] p-6 card-shadow">
            <div className="flex items-center justify-center mb-6 relative">
              <svg className="w-48 h-48 transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="none"
                  stroke="#E8F5E9"
                  strokeWidth="12"
                />
                {/* Progress circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(calories.consumed / calories.target) * 502.4} 502.4`}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-semibold text-primary">{calories.consumed}</p>
                <p className="text-muted-foreground">of {calories.target} kcal</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">{calories.remaining}</p>
                <p className="text-muted-foreground">Remaining</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">{calories.consumed}</p>
                <p className="text-muted-foreground">Consumed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="px-6 pb-6">
          <div className="bg-card rounded-[16px] p-6 card-shadow">
            <h3 className="mb-4">Macronutrients</h3>
            <div className="space-y-4">
              {Object.entries(macros).map(([key, macro]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize">{key}</span>
                    <span className="text-muted-foreground">
                      {macro.value}g / {macro.max}g
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(macro.value / macro.max) * 100}%`,
                        backgroundColor: macro.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meals List */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Today's Meals</h3>
            <button
              onClick={onViewMeals}
              className="text-primary"
            >
              See All
            </button>
          </div>
          <div className="space-y-3">
            {meals.map((meal) => (
              <div
                key={meal.id}
                className="bg-card rounded-[16px] p-4 card-shadow flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Apple className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-0.5">{meal.name}</h4>
                  <p className="text-muted-foreground">{meal.type} • {meal.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{meal.calories}</p>
                  <p className="text-muted-foreground">kcal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={onAddMeal}
        className="absolute bottom-24 right-6 w-14 h-14 rounded-full bg-primary shadow-xl flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105 z-50"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}