import { ArrowLeft, User, Bell, Ruler, FileText, LogOut, ChevronRight } from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onBack, onNavigate }: SettingsScreenProps) {
  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Settings', value: 'John Doe', screen: 'profileSettings' },
        { icon: Bell, label: 'Notifications', value: 'On', screen: 'notifications' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Ruler, label: 'Units', value: 'Metric', screen: 'units' },
      ],
    },
    {
      title: 'About',
      items: [
        { icon: FileText, label: 'Terms of Service', value: null, screen: 'termsOfService' },
        { icon: FileText, label: 'Privacy Policy', value: null, screen: 'privacyPolicy' },
      ],
    },
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
        <h2>Settings</h2>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        {/* Profile Card */}
        <div className="bg-card rounded-[16px] p-6 card-shadow mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">John Doe</h3>
              <p className="text-muted-foreground">john.doe@email.com</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="mb-3 text-muted-foreground">{section.title}</h4>
              <div className="bg-card rounded-[16px] card-shadow overflow-hidden">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors border-b border-border last:border-0"
                      onClick={() => onNavigate(item.screen)}
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium">{item.label}</p>
                        {item.value && (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* App Info */}
        <div className="mt-6 bg-card rounded-[16px] p-4 card-shadow text-center">
          <p className="text-muted-foreground">Version 1.0.0</p>
        </div>

        {/* Sign Out */}
        <button className="w-full mt-6 h-14 rounded-[16px] bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}