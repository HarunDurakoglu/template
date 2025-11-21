import { Apple } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full px-6 py-12 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
          <Apple className="w-10 h-10 text-white" fill="white" />
        </div>
        <h1 className="text-center mb-4">
          Welcome to CalorieTrack
        </h1>
        <p className="text-center text-muted-foreground max-w-[280px]">
          Track your meals, reach your goals, and build healthier habits with AI-powered tracking
        </p>
      </div>
      
      <button
        onClick={onGetStarted}
        className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}
