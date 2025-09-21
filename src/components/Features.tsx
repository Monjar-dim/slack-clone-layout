import { MessageSquare, Video, FileText, Puzzle, Shield, BarChart3 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Messaging",
      description: "Real-time communication that keeps your team connected and conversations organized in channels."
    },
    {
      icon: Video,
      title: "Video Conferencing", 
      description: "High-quality video calls and screen sharing to bring remote teams together seamlessly."
    },
    {
      icon: FileText,
      title: "File Sharing",
      description: "Secure file sharing and collaboration with version control and advanced search capabilities."
    },
    {
      icon: Puzzle,
      title: "App Integrations",
      description: "Connect with 2,000+ apps and tools your team already uses to centralize your workflow."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with compliance certifications trusted by the world's largest organizations."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Powerful analytics to measure team performance and optimize communication patterns."
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-inter">
            Everything your team needs to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform how your team collaborates and achieves results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;