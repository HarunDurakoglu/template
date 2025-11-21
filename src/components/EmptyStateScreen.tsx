import { Plus, Utensils } from 'lucide-react';

interface EmptyStateScreenProps {
  onAddMeal: () => void;
}

export function EmptyStateScreen({ onAddMeal }: EmptyStateScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background px-6">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center">
          <Utensils className="w-16 h-16 text-primary" />
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/30" />
      </div>

      <h2 className="mb-3 text-center">No Meals Yet</h2>
      <p className="text-center text-muted-foreground max-w-[280px] mb-8">
        Start tracking your meals to monitor your calorie intake and reach your health goals
      </p>

      <button
        onClick={onAddMeal}
        className="w-full max-w-sm h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        <span>Add Your First Meal</span>
      </button>

      {/* Tips Card */}
      <div className="mt-8 max-w-sm bg-accent rounded-[16px] p-6">
        <h4 className="mb-2 text-accent-foreground">💡 Quick Tip</h4>
        <p className="text-accent-foreground/80">
          Take a photo of your meal and our AI will automatically identify the food and calculate the calories for you!
        </p>
      </div>
    </div>
  );
}
