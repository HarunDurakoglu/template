import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotificationsScreenProps {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState({
    mealReminders: true,
    dailyProgress: true,
    weeklyReport: false,
    achievements: true,
    weightReminders: true,
    premiumOffers: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationItems = [
    { key: 'mealReminders' as const, label: 'Meal Reminders', description: 'Get notified to log your meals' },
    { key: 'dailyProgress' as const, label: 'Daily Progress', description: 'Daily summary of your progress' },
    { key: 'weeklyReport' as const, label: 'Weekly Report', description: 'Weekly overview of your stats' },
    { key: 'achievements' as const, label: 'Achievements', description: 'Celebrate your milestones' },
    { key: 'weightReminders' as const, label: 'Weight Reminders', description: 'Reminder to track weight' },
    { key: 'premiumOffers' as const, label: 'Premium Offers', description: 'Special deals and updates' },
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
        <h2>Notifications</h2>
        <p className="text-muted-foreground">Manage your notification preferences</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="space-y-3">
          {notificationItems.map((item) => (
            <div
              key={item.key}
              className="bg-card rounded-[16px] p-4 card-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <h4 className="mb-1">{item.label}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <button
                  onClick={() => toggleNotification(item.key)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notifications[item.key] ? 'bg-primary' : 'bg-switch-background'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                      notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-6 bg-accent rounded-[16px] p-4">
          <p className="text-accent-foreground/80">
            You can change these settings anytime. Make sure notifications are enabled in your device settings.
          </p>
        </div>
      </div>
    </div>
  );
}
