import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceScreenProps {
  onBack: () => void;
}

export function TermsOfServiceScreen({ onBack }: TermsOfServiceScreenProps) {
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
        <h2>Terms of Service</h2>
        <p className="text-muted-foreground">Last updated: Nov 21, 2025</p>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
        <div className="bg-card rounded-[16px] p-6 card-shadow space-y-4">
          <div>
            <h3 className="mb-3">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using CalorieTrack, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div>
            <h3 className="mb-3">2. Use of Service</h3>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use CalorieTrack only for lawful purposes and in accordance with these Terms. You agree not to use the service:
            </p>
            <ul className="mt-2 ml-4 space-y-2 text-muted-foreground">
              <li>• In any way that violates applicable laws</li>
              <li>• To transmit harmful or malicious code</li>
              <li>• To impersonate or attempt to impersonate the Company</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">3. User Accounts</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms.
            </p>
          </div>

          <div>
            <h3 className="mb-3">4. Health Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              CalorieTrack provides nutritional tracking tools but does not provide medical advice. Always consult with a qualified healthcare provider for medical advice.
            </p>
          </div>

          <div>
            <h3 className="mb-3">5. Subscription & Billing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis.
            </p>
          </div>

          <div>
            <h3 className="mb-3">6. Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content, features, and functionality are owned by CalorieTrack and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h3 className="mb-3">7. Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall CalorieTrack be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.
            </p>
          </div>

          <div>
            <h3 className="mb-3">8. Changes to Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
            </p>
          </div>

          <div>
            <h3 className="mb-3">9. Contact Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at support@calorietrack.com
            </p>
          </div>
        </div>

        <div className="bg-accent rounded-[16px] p-4 text-center">
          <p className="text-accent-foreground/80">
            By continuing to use CalorieTrack, you agree to these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
