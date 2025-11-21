import { Sparkles } from 'lucide-react';

export function AIAnalyzingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background px-6">
      {/* Animated Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <h2 className="mb-3 text-center">Analyzing Your Meal</h2>
      <p className="text-center text-muted-foreground max-w-[280px]">
        Our AI is identifying the food and calculating nutritional information...
      </p>

      {/* Loading dots */}
      <div className="flex gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
}
