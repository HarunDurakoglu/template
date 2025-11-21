import { ArrowLeft, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MonthlyProgressScreenProps {
  onBack: () => void;
}

export function MonthlyProgressScreen({ onBack }: MonthlyProgressScreenProps) {
  const data = [
    { day: 'Week 1', weight: 70.5, calories: 1850 },
    { day: 'Week 2', weight: 69.8, calories: 1920 },
    { day: 'Week 3', weight: 69.2, calories: 1780 },
    { day: 'Week 4', weight: 68.5, calories: 1900 },
  ];

  const stats = [
    { label: 'Weight Lost', value: '2.0 kg', trend: -2.8, color: 'text-primary' },
    { label: 'Avg. Calories', value: '1863', trend: null, color: 'text-foreground' },
    { label: 'Best Week', value: 'Week 3', trend: null, color: 'text-foreground' },
  ];

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
        <h2>Monthly Progress</h2>
        <p className="text-muted-foreground">November 2025</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-[16px] p-4 card-shadow text-center">
              <p className="text-muted-foreground mb-2">{stat.label}</p>
              <p className={`text-xl font-semibold ${stat.color}`}>{stat.value}</p>
              {stat.trend !== null && (
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-primary" />
                  <span className="text-primary">{Math.abs(stat.trend)}%</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Weight Chart */}
        <div className="bg-card rounded-[16px] p-6 card-shadow">
          <h3 className="mb-4">Weight Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis
                dataKey="day"
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
              />
              <YAxis
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
                domain={[68, 71]}
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
                dot={{ fill: '#4CAF50', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Calories Chart */}
        <div className="bg-card rounded-[16px] p-6 card-shadow">
          <h3 className="mb-4">Daily Calories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis
                dataKey="day"
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
              />
              <YAxis
                tick={{ fill: '#737373', fontSize: 12 }}
                stroke="#e5e5e5"
                domain={[1700, 2000]}
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
                dataKey="calories"
                stroke="#66BB6A"
                strokeWidth={3}
                dot={{ fill: '#66BB6A', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary */}
        <div className="bg-accent rounded-[16px] p-6">
          <h4 className="mb-2 text-accent-foreground">Great Progress! 🎉</h4>
          <p className="text-accent-foreground/80">
            You've lost 2.0 kg this month while maintaining a healthy calorie intake. Keep up the excellent work!
          </p>
        </div>
      </div>
    </div>
  );
}
