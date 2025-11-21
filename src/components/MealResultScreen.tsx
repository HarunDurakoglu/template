import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MealResultScreenProps {
  onClose: () => void;
  onAddToday: () => void;
}

export function MealResultScreen({ onClose, onAddToday }: MealResultScreenProps) {
  const [portion, setPortion] = useState(1);

  const baseCalories = 420;
  const baseMacros = {
    protein: 12,
    carbs: 45,
    fat: 18,
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <h2>Meal Details</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto pb-6">
        {/* Meal Photo */}
        <div className="px-6 mb-6">
          <div className="rounded-[16px] overflow-hidden card-shadow">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYzNjk5MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Greek Salad Bowl"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Meal Info */}
        <div className="px-6 mb-6">
          <div className="flex items-start gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="mb-1">Greek Salad Bowl</h3>
              <p className="text-muted-foreground">
                Mixed greens, feta cheese, olives, tomatoes, cucumber
              </p>
            </div>
          </div>
        </div>

        {/* Calories Card */}
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[16px] p-6 text-white card-shadow">
            <div className="text-center">
              <p className="text-5xl font-semibold mb-2">{Math.round(baseCalories * portion)}</p>
              <p className="text-white/80">Calories</p>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="px-6 mb-6">
          <div className="bg-card rounded-[16px] p-6 card-shadow">
            <h4 className="mb-4">Macronutrients</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent rounded-xl">
                <p className="text-2xl font-semibold text-primary mb-1">
                  {Math.round(baseMacros.protein * portion)}g
                </p>
                <p className="text-muted-foreground">Protein</p>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <p className="text-2xl font-semibold text-primary mb-1">
                  {Math.round(baseMacros.carbs * portion)}g
                </p>
                <p className="text-muted-foreground">Carbs</p>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <p className="text-2xl font-semibold text-primary mb-1">
                  {Math.round(baseMacros.fat * portion)}g
                </p>
                <p className="text-muted-foreground">Fat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portion Size */}
        <div className="px-6 mb-6">
          <div className="bg-card rounded-[16px] p-6 card-shadow">
            <div className="flex justify-between items-center mb-4">
              <h4>Portion Size</h4>
              <span className="text-primary font-semibold">{portion}x</span>
            </div>
            <input
              type="range"
              min="0.25"
              max="3"
              step="0.25"
              value={portion}
              onChange={(e) => setPortion(parseFloat(e.target.value))}
              className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-muted-foreground">
              <span>0.25x</span>
              <span>3x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="px-6 py-6 bg-card border-t border-border">
        <button
          onClick={onAddToday}
          className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Add to Today
        </button>
      </div>
    </div>
  );
}
