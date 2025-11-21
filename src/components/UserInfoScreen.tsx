import { useState } from 'react';
import { User } from 'lucide-react';

interface UserInfoScreenProps {
  onContinue: () => void;
}

export function UserInfoScreen({ onContinue }: UserInfoScreenProps) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('25');
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="px-6 py-6">
        <h2 className="mb-2">Tell us about yourself</h2>
        <p className="text-muted-foreground">This helps us personalize your goals</p>
      </div>

      <div className="flex-1 px-6 space-y-6 overflow-auto">
        {/* Gender Selector */}
        <div>
          <label className="block mb-3">Gender</label>
          <div className="flex gap-3">
            <button
              onClick={() => setGender('male')}
              className={`flex-1 h-14 rounded-[16px] border-2 transition-all ${
                gender === 'male'
                  ? 'border-primary bg-accent text-accent-foreground'
                  : 'border-border bg-card'
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`flex-1 h-14 rounded-[16px] border-2 transition-all ${
                gender === 'female'
                  ? 'border-primary bg-accent text-accent-foreground'
                  : 'border-border bg-card'
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block mb-3">Age (years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full h-14 px-4 rounded-[16px] bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your age"
          />
        </div>

        {/* Height */}
        <div>
          <label className="block mb-3">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full h-14 px-4 rounded-[16px] bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your height"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block mb-3">Current Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full h-14 px-4 rounded-[16px] bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your weight"
          />
        </div>
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
