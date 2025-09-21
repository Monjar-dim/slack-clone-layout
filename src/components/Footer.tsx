const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-accent font-semibold mb-4 font-inter">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Customer Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-semibold mb-4 font-inter">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Engineering</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">IT</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-semibold mb-4 font-inter">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Partners</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Developers</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Apps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-semibold mb-4 font-inter">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">News</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Slack Technologies, LLC, a Salesforce company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;