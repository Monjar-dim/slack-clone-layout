import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageSquare, Users, Clock, CheckCircle, X, Star, ArrowRight } from 'lucide-react';

const SalesSection = () => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const loadCalEmbed = async () => {
      try {
        // Dynamically import Cal.com embed
        const { getCalApi } = await import('@calcom/embed-react');
        const cal = await getCalApi({"namespace":"demo-call"});
        cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        setIsCalLoaded(true);
      } catch (error) {
        console.log('Cal.com embed not available, using fallback');
        setIsCalLoaded(true);
      }
    };

    loadCalEmbed();
  }, []);

  return (
    <div className="bg-background">
      {/* Sales Contact Hero Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to see Slack in action?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with our sales experts to discover how Slack can transform your team's 
              productivity, streamline workflows, and drive measurable results for your organization.
            </p>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-16">
            <button
              data-cal-namespace="demo-call"
              data-cal-link="monjardino/demo-call"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <Calendar size={24} />
              Book Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-muted-foreground mt-4 text-sm">
              Free 30-minute demo • No commitment required
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-destructive">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Personalized Demo</h3>
              <p className="text-muted-foreground leading-relaxed">
                See Slack customized for your industry and team size. Our experts will show you 
                features that matter most to your specific use case.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-destructive">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Implementation Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get expert advice on rolling out Slack to your team, including best practices, 
                integrations, and change management strategies.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-destructive">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover how Enterprise Grid can scale with your organization, including 
                advanced security, compliance, and admin controls.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Join 500,000+ teams who chose Slack
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                "Slack transformed how our team communicates. We've seen a 40% increase in 
                project completion speed and significantly better cross-team collaboration."
              </p>
              <p className="text-muted-foreground/80 mt-4">— Sarah Chen, VP of Operations at TechCorp</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-bold text-card-foreground mb-4">What you'll see in your demo:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Channel organization and workflow automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Integration setup with your existing tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Security features and admin controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">ROI calculator and implementation timeline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-bold text-card-foreground mb-4">Alternative contact options:</h4>
                <div className="space-y-4">
                  <a 
                    href="tel:+1-800-SLACK-01"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Sales</p>
                      <p className="text-sm text-muted-foreground/80">+1 (800) SLACK-01</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:sales@slack.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MessageSquare size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Sales</p>
                      <p className="text-sm text-muted-foreground/80">sales@slack.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See why teams love Slack
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, teams worldwide rely on Slack to stay 
            connected, productive, and aligned on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              data-cal-namespace="demo-call"
              data-cal-link="monjardino/demo-call"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <Calendar size={20} />
              Book Demo
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-muted-foreground mb-8">Trusted by industry leaders worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground/60">Uber</div>
              <p className="text-xs text-muted-foreground/60 mt-1">Ride-sharing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground/60">Airbnb</div>
              <p className="text-xs text-muted-foreground/60 mt-1">Hospitality</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground/60">NASA</div>
              <p className="text-xs text-muted-foreground/60 mt-1">Aerospace</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground/60">IBM</div>
              <p className="text-xs text-muted-foreground/60 mt-1">Technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesSection;