import { ArrowLeft, Apple } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DailyMealsScreenProps {
  onBack: () => void;
}

export function DailyMealsScreen({ onBack }: DailyMealsScreenProps) {
  const meals = [
    {
      id: 1,
      name: 'Avocado Toast with Eggs',
      time: '8:30 AM',
      calories: 320,
      type: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1626920370527-32e9c0fd5a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBhdm9jYWRvfGVufDF8fHx8MTc2Mzc1MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Greek Salad Bowl',
      time: '12:45 PM',
      calories: 420,
      type: 'Lunch',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYzNjk5MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Berry Protein Smoothie',
      time: '3:20 PM',
      calories: 285,
      type: 'Snack',
      image: 'https://images.unsplash.com/photo-1649069041246-457021025dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21vb3RoaWV8ZW58MXx8fHwxNzYzNzUwNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Grilled Chicken & Vegetables',
      time: '7:15 PM',
      calories: 431,
      type: 'Dinner',
      image: 'https://images.unsplash.com/photo-1606858274001-dd10efc5ce7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzYzNjk1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 py-6 bg-card border-b border-border">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h2>Today's Meals</h2>
            <p className="text-muted-foreground">Friday, Nov 21</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold text-primary">{totalCalories}</p>
            <p className="text-muted-foreground">Total kcal</p>
          </div>
        </div>
      </div>

      {/* Meals List */}
      <div className="flex-1 overflow-auto px-6 py-6 space-y-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-card rounded-[16px] overflow-hidden card-shadow"
          >
            <div className="flex gap-4">
              <ImageWithFallback
                src={meal.image}
                alt={meal.name}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div className="flex-1 py-4 pr-4">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="flex-1">{meal.name}</h4>
                  <p className="font-semibold text-primary ml-2">{meal.calories} kcal</p>
                </div>
                <p className="text-muted-foreground mb-2">{meal.type}</p>
                <p className="text-muted-foreground">{meal.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
