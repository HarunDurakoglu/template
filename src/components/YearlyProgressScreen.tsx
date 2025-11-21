import { ArrowLeft } from 'lucide-react';

interface YearlyProgressScreenProps {
  onBack: () => void;
}

export function YearlyProgressScreen({ onBack }: YearlyProgressScreenProps) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Generate mock heatmap data
  const generateHeatmapData = () => {
    const data: { [key: string]: number } = {};
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= 31; day++) {
        if (month < 10 || (month === 10 && day <= 21)) {
          const key = `${month}-${day}`;
          data[key] = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
        }
      }
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getColorForValue = (value: number) => {
    if (value === 0) return '#f5f5f5';
    if (value === 1) return '#C8E6C9';
    if (value === 2) return '#A5D6A7';
    if (value === 3) return '#81C784';
    if (value === 4) return '#66BB6A';
    return '#4CAF50';
  };

  const stats = [
    { label: 'Total Weight Lost', value: '8.5 kg' },
    { label: 'Active Days', value: '287' },
    { label: 'Meals Logged', value: '1,142' },
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
        <h2>Yearly Progress</h2>
        <p className="text-muted-foreground">2025 Overview</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-[16px] p-4 card-shadow text-center">
              <p className="text-2xl font-semibold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Heatmap Calendar */}
        <div className="bg-card rounded-[16px] p-6 card-shadow">
          <h3 className="mb-4">Activity Heatmap</h3>
          <p className="text-muted-foreground mb-4">Days with logged meals</p>
          
          <div className="space-y-4 overflow-x-auto">
            {months.map((month, monthIndex) => (
              <div key={month}>
                <p className="text-muted-foreground mb-2">{month}</p>
                <div className="flex gap-1 flex-wrap">
                  {Array.from({ length: 31 }, (_, dayIndex) => {
                    const day = dayIndex + 1;
                    const key = `${monthIndex}-${day}`;
                    const value = heatmapData[key] || 0;
                    return (
                      <div
                        key={day}
                        className="w-6 h-6 rounded-sm transition-all hover:scale-110"
                        style={{ backgroundColor: getColorForValue(value) }}
                        title={`${month} ${day}: ${value} meals`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
            <span className="text-muted-foreground">Less</span>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <div
                key={value}
                className="w-6 h-6 rounded-sm"
                style={{ backgroundColor: getColorForValue(value) }}
              />
            ))}
            <span className="text-muted-foreground">More</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[16px] p-6 text-white card-shadow">
          <h3 className="mb-3 text-white">2025 Achievement 🏆</h3>
          <p className="text-white/90 mb-4">
            You've logged meals for 287 days this year! That's 78% consistency - incredible dedication to your health journey.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-semibold">78%</p>
              <p className="text-white/80">Consistency</p>
            </div>
            <div className="flex-1 bg-white/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-semibold">12.1%</p>
              <p className="text-white/80">Body Fat Lost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
