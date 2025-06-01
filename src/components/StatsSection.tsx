const StatsSection = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Platform Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <a href="#" className="block">
          <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-105 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-foreground">7.9T</p>
                <p className="text-xs md:text-sm text-muted-foreground">Monthly Tokens</p>
              </div>
            </div>
          </div>
        </a>
        
        <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-105 hover:shadow-slate-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">2M</p>
              <p className="text-xs md:text-sm text-muted-foreground">Global Users</p>
            </div>
          </div>
        </div>
        
        <a href="#" className="block">
          <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-105 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Active Providers</p>
              </div>
            </div>
          </div>
        </a>
        
        <a href="#" className="block">
          <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-105 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">300+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Models</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default StatsSection;