import { useState } from 'react';
import { X, Check, Sparkles, TrendingUp, Calendar, Zap } from 'lucide-react';

interface PremiumUpgradeScreenProps {
  onClose: () => void;
}

export function PremiumUpgradeScreen({ onClose }: PremiumUpgradeScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const features = [
    { icon: Sparkles, text: 'Unlimited AI meal analysis' },
    { icon: TrendingUp, text: 'Advanced progress analytics' },
    { icon: Calendar, text: 'Custom meal planning' },
    { icon: Zap, text: 'Priority support' },
  ];

  const plans = [
    {
      id: 'monthly' as const,
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      savings: null,
    },
    {
      id: 'yearly' as const,
      name: 'Yearly',
      price: '$79.99',
      period: '/year',
      savings: 'Save 33%',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <h2>Premium</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto px-6 pb-6">
        {/* Hero */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[16px] p-8 text-white card-shadow mb-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-2 text-white">Unlock Premium</h2>
          <p className="text-white/90">
            Get unlimited access to all features and take your health journey to the next level
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="mb-4">Premium Features</h3>
          <div className="space-y-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-[16px] p-4 card-shadow flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plans */}
        <div className="mb-6">
          <h3 className="mb-4">Choose Your Plan</h3>
          <div className="space-y-3">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full rounded-[16px] p-6 border-2 transition-all text-left relative ${
                    isSelected
                      ? 'border-primary bg-accent shadow-md'
                      : 'border-border bg-card'
                  }`}
                >
                  {plan.savings && (
                    <div className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full">
                      <p className="text-sm font-medium">{plan.savings}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="mb-1">{plan.name}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-semibold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div className="bg-secondary rounded-[16px] p-4 text-center">
          <p className="text-muted-foreground">
            Cancel anytime. 7-day free trial included.
          </p>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="px-6 py-6 bg-card border-t border-border">
        <button className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
