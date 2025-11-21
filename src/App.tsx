import { useState } from 'react';
import { Home, TrendingUp, Calendar, Settings, Apple } from 'lucide-react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { UserInfoScreen } from './components/UserInfoScreen';
import { GoalSelectionScreen } from './components/GoalSelectionScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { AddMealScreen } from './components/AddMealScreen';
import { AIAnalyzingScreen } from './components/AIAnalyzingScreen';
import { MealResultScreen } from './components/MealResultScreen';
import { DailyMealsScreen } from './components/DailyMealsScreen';
import { MonthlyProgressScreen } from './components/MonthlyProgressScreen';
import { YearlyProgressScreen } from './components/YearlyProgressScreen';
import { WeightTrackingScreen } from './components/WeightTrackingScreen';
import { PremiumUpgradeScreen } from './components/PremiumUpgradeScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { EmptyStateScreen } from './components/EmptyStateScreen';
import { ProfileSettingsScreen } from './components/ProfileSettingsScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { UnitsScreen } from './components/UnitsScreen';
import { TermsOfServiceScreen } from './components/TermsOfServiceScreen';
import { PrivacyPolicyScreen } from './components/PrivacyPolicyScreen';

type Screen =
  | 'welcome'
  | 'userInfo'
  | 'goalSelection'
  | 'home'
  | 'addMeal'
  | 'aiAnalyzing'
  | 'mealResult'
  | 'dailyMeals'
  | 'monthlyProgress'
  | 'yearlyProgress'
  | 'weightTracking'
  | 'premium'
  | 'settings'
  | 'empty'
  | 'profileSettings'
  | 'notifications'
  | 'units'
  | 'termsOfService'
  | 'privacyPolicy';

type Tab = 'home' | 'progress' | 'weight' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('userInfo')} />;
      
      case 'userInfo':
        return <UserInfoScreen onContinue={() => setCurrentScreen('goalSelection')} />;
      
      case 'goalSelection':
        return <GoalSelectionScreen onContinue={() => setCurrentScreen('home')} />;
      
      case 'home':
        return (
          <HomeDashboard
            onAddMeal={() => setCurrentScreen('addMeal')}
            onViewMeals={() => setCurrentScreen('dailyMeals')}
          />
        );
      
      case 'addMeal':
        return (
          <AddMealScreen
            onClose={() => setCurrentScreen('home')}
            onTakePhoto={() => {
              setCurrentScreen('aiAnalyzing');
              setTimeout(() => setCurrentScreen('mealResult'), 2000);
            }}
            onChooseGallery={() => {
              setCurrentScreen('aiAnalyzing');
              setTimeout(() => setCurrentScreen('mealResult'), 2000);
            }}
          />
        );
      
      case 'aiAnalyzing':
        return <AIAnalyzingScreen />;
      
      case 'mealResult':
        return (
          <MealResultScreen
            onClose={() => setCurrentScreen('home')}
            onAddToday={() => setCurrentScreen('home')}
          />
        );
      
      case 'dailyMeals':
        return <DailyMealsScreen onBack={() => setCurrentScreen('home')} />;
      
      case 'monthlyProgress':
        return <MonthlyProgressScreen onBack={() => setCurrentScreen('home')} />;
      
      case 'yearlyProgress':
        return <YearlyProgressScreen onBack={() => setCurrentScreen('monthlyProgress')} />;
      
      case 'weightTracking':
        return (
          <WeightTrackingScreen
            onBack={() => setCurrentScreen('home')}
            onUpdateWeight={() => {
              // Could show a modal here
              alert('Weight update modal would open here');
            }}
          />
        );
      
      case 'premium':
        return <PremiumUpgradeScreen onClose={() => setCurrentScreen('home')} />;
      
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentScreen('home')} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      
      case 'empty':
        return <EmptyStateScreen onAddMeal={() => setCurrentScreen('addMeal')} />;
      
      case 'profileSettings':
        return <ProfileSettingsScreen onBack={() => setCurrentScreen('settings')} />;
      
      case 'notifications':
        return <NotificationsScreen onBack={() => setCurrentScreen('settings')} />;
      
      case 'units':
        return <UnitsScreen onBack={() => setCurrentScreen('settings')} />;
      
      case 'termsOfService':
        return <TermsOfServiceScreen onBack={() => setCurrentScreen('settings')} />;
      
      case 'privacyPolicy':
        return <PrivacyPolicyScreen onBack={() => setCurrentScreen('settings')} />;
      
      default:
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('userInfo')} />;
    }
  };

  const showBottomNav = ['home', 'monthlyProgress', 'yearlyProgress', 'weightTracking', 'settings'].includes(currentScreen);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'progress':
        setCurrentScreen('monthlyProgress');
        break;
      case 'weight':
        setCurrentScreen('weightTracking');
        break;
      case 'settings':
        setCurrentScreen('settings');
        break;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted p-4">
      {/* iPhone 15 Pro Frame */}
      <div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full z-50" />
        
        {/* Screen */}
        <div className="w-full h-full bg-background rounded-[48px] overflow-hidden relative flex flex-col">
          {/* Status Bar */}
          <div className="h-12 bg-card flex items-center justify-between px-8 pt-3 flex-shrink-0">
            <span className="text-sm font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-foreground rounded-sm relative">
                <div className="absolute inset-0.5 bg-foreground rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-hidden">
            {renderScreen()}
          </div>

          {/* Bottom Navigation */}
          {showBottomNav && (
            <div className="h-20 bg-card border-t border-border flex items-center justify-around px-6 flex-shrink-0">
              <button
                onClick={() => handleTabChange('home')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => handleTabChange('progress')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'progress' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <TrendingUp className="w-6 h-6" />
                <span className="text-xs">Progress</span>
              </button>
              <button
                onClick={() => handleTabChange('weight')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'weight' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Calendar className="w-6 h-6" />
                <span className="text-xs">Weight</span>
              </button>
              <button
                onClick={() => handleTabChange('settings')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'settings' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Settings className="w-6 h-6" />
                <span className="text-xs">Settings</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Screen Selector (Development Tool) */}
      <div className="fixed top-4 right-4 bg-card rounded-[16px] p-4 card-shadow max-w-xs">
        <h3 className="mb-3">Quick Navigation</h3>
        <div className="space-y-2 max-h-[600px] overflow-auto">
          <button
            onClick={() => setCurrentScreen('welcome')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            1. Welcome
          </button>
          <button
            onClick={() => setCurrentScreen('userInfo')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            2. User Info
          </button>
          <button
            onClick={() => setCurrentScreen('goalSelection')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            3. Goal Selection
          </button>
          <button
            onClick={() => setCurrentScreen('home')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            4. Home Dashboard
          </button>
          <button
            onClick={() => setCurrentScreen('addMeal')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            5. Add Meal
          </button>
          <button
            onClick={() => setCurrentScreen('aiAnalyzing')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            6. AI Analyzing
          </button>
          <button
            onClick={() => setCurrentScreen('mealResult')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            7. Meal Result
          </button>
          <button
            onClick={() => setCurrentScreen('dailyMeals')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            8. Daily Meals
          </button>
          <button
            onClick={() => setCurrentScreen('monthlyProgress')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            9. Monthly Progress
          </button>
          <button
            onClick={() => setCurrentScreen('yearlyProgress')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            10. Yearly Progress
          </button>
          <button
            onClick={() => setCurrentScreen('weightTracking')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            11. Weight Tracking
          </button>
          <button
            onClick={() => setCurrentScreen('premium')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            12. Premium Upgrade
          </button>
          <button
            onClick={() => setCurrentScreen('settings')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            13. Settings
          </button>
          <button
            onClick={() => setCurrentScreen('empty')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            14. Empty State
          </button>
          <button
            onClick={() => setCurrentScreen('profileSettings')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            15. Profile Settings
          </button>
          <button
            onClick={() => setCurrentScreen('notifications')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            16. Notifications
          </button>
          <button
            onClick={() => setCurrentScreen('units')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            17. Units
          </button>
          <button
            onClick={() => setCurrentScreen('termsOfService')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            18. Terms of Service
          </button>
          <button
            onClick={() => setCurrentScreen('privacyPolicy')}
            className="w-full px-3 py-2 text-left text-sm bg-secondary hover:bg-muted rounded-lg transition-colors"
          >
            19. Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}