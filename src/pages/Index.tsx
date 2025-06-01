import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeatureCards from "@/components/FeatureCards";
import TopAppsSection from "@/components/TopAppsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <HeroSection />
          </section>
          
          {/* Stats Section */}
          <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
            <StatsSection />
          </section>
          
          {/* Get Started Section */}
          <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started in 3 Steps</h2>
            <GetStartedSection />
          </section>
          
          {/* Feature Cards */}
          <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <FeatureCards />
          </section>
          
          {/* Top Apps Section */}
          <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
            <TopAppsSection />
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full border-t border-border py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary"></div>
            <span className="font-bold">OpenRouter</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenRouter. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;