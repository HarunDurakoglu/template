import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface UnitsScreenProps {
  onBack: () => void;
}

export function UnitsScreen({ onBack }: UnitsScreenProps) {
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');

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
        <h2>Units</h2>
        <p className="text-muted-foreground">Choose your preferred units</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        {/* Weight Unit */}
        <div>
          <h3 className="mb-4">Weight</h3>
          <div className="space-y-3">
            <button
              onClick={() => setWeightUnit('kg')}
              className={`w-full rounded-[16px] p-4 border-2 transition-all flex items-center justify-between ${
                weightUnit === 'kg'
                  ? 'border-primary bg-accent'
                  : 'border-border bg-card'
              }`}
            >
              <div>
                <h4 className="mb-1">Kilograms (kg)</h4>
                <p className="text-muted-foreground">Metric system</p>
              </div>
              {weightUnit === 'kg' && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </button>

            <button
              onClick={() => setWeightUnit('lbs')}
              className={`w-full rounded-[16px] p-4 border-2 transition-all flex items-center justify-between ${
                weightUnit === 'lbs'
                  ? 'border-primary bg-accent'
                  : 'border-border bg-card'
              }`}
            >
              <div>
                <h4 className="mb-1">Pounds (lbs)</h4>
                <p className="text-muted-foreground">Imperial system</p>
              </div>
              {weightUnit === 'lbs' && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Height Unit */}
        <div>
          <h3 className="mb-4">Height</h3>
          <div className="space-y-3">
            <button
              onClick={() => setHeightUnit('cm')}
              className={`w-full rounded-[16px] p-4 border-2 transition-all flex items-center justify-between ${
                heightUnit === 'cm'
                  ? 'border-primary bg-accent'
                  : 'border-border bg-card'
              }`}
            >
              <div>
                <h4 className="mb-1">Centimeters (cm)</h4>
                <p className="text-muted-foreground">Metric system</p>
              </div>
              {heightUnit === 'cm' && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </button>

            <button
              onClick={() => setHeightUnit('ft')}
              className={`w-full rounded-[16px] p-4 border-2 transition-all flex items-center justify-between ${
                heightUnit === 'ft'
                  ? 'border-primary bg-accent'
                  : 'border-border bg-card'
              }`}
            >
              <div>
                <h4 className="mb-1">Feet & Inches (ft)</h4>
                <p className="text-muted-foreground">Imperial system</p>
              </div>
              {heightUnit === 'ft' && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-6 py-6 bg-card border-t border-border">
        <button
          onClick={onBack}
          className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
