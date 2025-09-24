import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-primary pt-24 pb-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 font-inter leading-tight">
          Turn conversations into 
          <span className="block text-accent"> million-dollar results</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where teams connect and work flows seamlessly. Transform your team's productivity 
          with the communication platform trusted by Fortune 500 companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            data-cal-namespace="demo-call"
            data-cal-link="monjardino/demo-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Start your million-dollar journey
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-200 bg-transparent"
            data-cal-namespace="demo-call"
            data-cal-link="monjardino/demo-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Watch demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;