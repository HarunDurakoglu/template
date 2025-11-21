import { useState } from 'react';
import { TrendingDown, Minus, TrendingUp } from 'lucide-react';

interface GoalSelectionScreenProps {
  onContinue: () => void;
}

export function GoalSelectionScreen({ onContinue }: GoalSelectionScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState<'lose' | 'maintain' | 'gain'>('lose');

  const goals = [
    {
      id: 'lose' as const,
      title: 'Lose Weight',
      description: 'Reduce body fat and slim down',
      icon: TrendingDown,
      color: '#4CAF50',
    },
    {
      id: 'maintain' as const,
      title: 'Maintain Weight',
      description: 'Keep your current weight',
      icon: Minus,
      color: '#66BB6A',
    },
    {
      id: 'gain' as const,
      title: 'Gain Weight',
      description: 'Build muscle and mass',
      icon: TrendingUp,
      color: '#81C784',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="px-6 py-6">
        <h2 className="mb-2">What's your goal?</h2>
        <p className="text-muted-foreground">Choose what you want to achieve</p>
      </div>

      <div className="flex-1 px-6 space-y-4 overflow-auto">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;
          
          return (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`w-full p-6 rounded-[16px] border-2 transition-all text-left ${
                isSelected
                  ? 'border-primary bg-accent shadow-md'
                  : 'border-border bg-card'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-primary' : 'bg-secondary'
                  }`}
                  style={isSelected ? {} : { backgroundColor: goal.color + '20' }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: isSelected ? 'white' : goal.color }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{goal.title}</h4>
                  <p className="text-muted-foreground">{goal.description}</p>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="px-6 py-6">
        <button
          onClick={onContinue}
          className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
