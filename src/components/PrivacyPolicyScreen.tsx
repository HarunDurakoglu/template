import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

export function PrivacyPolicyScreen({ onBack }: PrivacyPolicyScreenProps) {
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
        <h2>Privacy Policy</h2>
        <p className="text-muted-foreground">Last updated: Nov 21, 2025</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        {/* Privacy Promise */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[16px] p-6 text-white card-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2 text-white">Your Privacy Matters</h3>
              <p className="text-white/90">
                We are committed to protecting your personal information and your right to privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[16px] p-6 card-shadow space-y-4">
          <div>
            <h3 className="mb-3">1. Information We Collect</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We collect information that you provide directly to us:
            </p>
            <ul className="ml-4 space-y-2 text-muted-foreground">
              <li>• Personal information (name, email, age)</li>
              <li>• Health data (weight, height, dietary information)</li>
              <li>• Usage information and preferences</li>
              <li>• Photos of meals for AI analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">2. How We Use Your Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use the information we collect to:
            </p>
            <ul className="ml-4 space-y-2 text-muted-foreground">
              <li>• Provide and improve our services</li>
              <li>• Personalize your experience</li>
              <li>• Send you notifications and updates</li>
              <li>• Analyze usage patterns and trends</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">3. Data Security</h3>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h3 className="mb-3">4. Data Sharing</h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="mt-2 ml-4 space-y-2 text-muted-foreground">
              <li>• With your consent</li>
              <li>• To comply with legal obligations</li>
              <li>• With service providers who assist us</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">5. Your Rights</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="ml-4 space-y-2 text-muted-foreground">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Export your data</li>
              <li>• Opt-out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">6. Cookies & Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies.
            </p>
          </div>

          <div>
            <h3 className="mb-3">7. Children's Privacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h3 className="mb-3">8. Changes to This Policy</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div>
            <h3 className="mb-3">9. Contact Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@calorietrack.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
