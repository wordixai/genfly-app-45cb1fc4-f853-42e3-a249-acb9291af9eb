import { BarChart3, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopAppsSection = () => {
  const apps = [
    { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "26.5B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cline.bot/&size=256" },
    { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "21.8B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roocode.com/&size=256" },
    { rank: 3, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.16B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sillytavern.app/&size=256" },
    { rank: 4, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "5.01B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.ai/&size=256" },
    { rank: 5, name: "Chub AI", description: "GenAI for everyone", tokens: "4.22B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chub.ai/&size=256" },
  ];

  const appsColumn2 = [
    { rank: 6, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "3.78B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://litellm.ai/&size=256" },
    { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "1.92B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hammerai.com/&size=256" },
    { rank: 8, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.53B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://infiniteworlds.app/&size=256" },
    { rank: 9, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.26B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256" },
    { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "984M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://shapes.inc/&size=256" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-xl font-semibold">Top Apps</h3>
          </div>
          <p className="text-sm text-slate-11">
            Largest public apps{" "}
            <a href="#" className="text-primary hover:underline">
              opting into
            </a>{" "}
            usage tracking on OpenRouter
          </p>
        </div>
        <div className="group relative">
          <Button
            variant="outline"
            className="gap-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-9 px-4 border rounded-full text-sm pl-4 pr-2"
          >
            Today
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          {apps.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg p-2 hover:bg-muted/40 transition-colors">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <img
                      width="256"
                      height="256"
                      alt={`Favicon for ${app.name}`}
                      src={app.favicon}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-4 text-left">
                <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer">
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">{app.description}</div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          {appsColumn2.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg p-2 hover:bg-muted/40 transition-colors">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <img
                      width="256"
                      height="256"
                      alt={`Favicon for ${app.name}`}
                      src={app.favicon}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-4 text-left">
                <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer">
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">{app.description}</div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-6">
            <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/5">
              View All Apps
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAppsSection;