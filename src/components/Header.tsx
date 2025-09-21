import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary-foreground font-inter">
              Slack
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Solutions
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Resources
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Try for free
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;