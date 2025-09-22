import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import SalesSection from "@/components/SalesSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <SalesSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
