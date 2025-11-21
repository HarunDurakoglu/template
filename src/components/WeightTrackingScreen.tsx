import { ArrowLeft, Scale } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeightTrackingScreenProps {
  onBack: () => void;
  onUpdateWeight: () => void;
}

export function WeightTrackingScreen({ onBack, onUpdateWeight }: WeightTrackingScreenProps) {
  const data = [
    { date: 'Jan', weight: 75.0 },
    { date: 'Feb', weight: 74.2 },
    { date: 'Mar', weight: 73.5 },
    { date: 'Apr', weight: 72.8 },
    { date: 'May', weight: 72.0 },
    { date: 'Jun', weight: 71.5 },
    { date: 'Jul', weight: 71.0 },
    { date: 'Aug', weight: 70.2 },
    { date: 'Sep', weight: 69.8 },
    { date: 'Oct', weight: 69.0 },
    { date: 'Nov', weight: 68.5 },
  ];

  const currentWeight = data[data.length - 1].weight;
  const startWeight = data[0].weight;
  const weightLost = startWeight - currentWeight;
  const percentageLost = ((weightLost / startWeight) * 100).toFixed(1);

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
        <h2>Weight Tracking</h2>
        <p className="text-muted-foreground">Your weight journey</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        {/* Current Weight Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[16px] p-6 text-white card-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/80">Current Weight</p>
              <p className="text-3xl font-semibold">{currentWeight} kg</p>
            </div>
          </div>
          <div className="flex gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/80 mb-1">Lost</p>
              <p className="text-xl font-semibold">{weightLost.toFixed(1)} kg</p>
            </div>
            <div>
              <p className="text-white/80 mb-1">Progress</p>
              <p className="text-xl font-semibold">{percentageLost}%</p>
            </div>
            <div>
              <p className="text-white/80 mb-1">Goal</p>
              <p className="text-xl font-semibold">65.0 kg</p>
            </div>
          </div>
        </div>

        {/* Weight Chart */}
        <div className="bg-card rounded-[16px] p-6 card-shadow">
          <h3 className="mb-4">Weight Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis
                dataKey="date"
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
              />
              <YAxis
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
                domain={[64, 76]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '12px',
                  padding: '8px 12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#4CAF50"
                strokeWidth={3}
                dot={{ fill: '#4CAF50', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Entries */}
        <div className="bg-card rounded-[16px] p-6 card-shadow">
          <h3 className="mb-4">Recent Entries</h3>
          <div className="space-y-3">
            {data.slice(-5).reverse().map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium">{entry.date} 2025</p>
                  <p className="text-muted-foreground">Morning weigh-in</p>
                </div>
                <p className="text-xl font-semibold text-primary">{entry.weight} kg</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-accent rounded-[16px] p-6">
          <h4 className="mb-3 text-accent-foreground">Next Milestone 🎯</h4>
          <p className="text-accent-foreground/80 mb-2">
            You're only 3.5 kg away from your goal weight!
          </p>
          <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${((startWeight - currentWeight) / (startWeight - 65)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Update Weight Button */}
      <div className="px-6 py-6 bg-card border-t border-border">
        <button
          onClick={onUpdateWeight}
          className="w-full h-14 rounded-[16px] bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Update Weight
        </button>
      </div>
    </div>
  );
}
