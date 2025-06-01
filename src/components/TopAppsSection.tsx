import { BarChart3, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopAppsSection = () => {
  const apps = [
    { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "26.5B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cline.bot/&size=256" },
    { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "21.8B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roocode.com/&size=256" },
    { rank: 3, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.16B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sillytavern.app/&size=256" },
    { rank: 4, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "5.01B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.ai/&size=256" },
    { rank: 5, name: "Chub AI", description: "GenAI for everyone", tokens: "4.22B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chub.ai/&size=256" },
    { rank: 6, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "3.78B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://litellm.ai/&size=256" },
    { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "1.92B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hammerai.com/&size=256" },
    { rank: 8, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.53B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://infiniteworlds.app/&size=256" },
    { rank: 9, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.26B", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/&size=256" },
    { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "984M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://shapes.inc/&size=256" },
  ];

  const appsColumn2 = [
    { rank: 11, name: "Caveduck", description: "AI character chat", tokens: "903M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.caveduck.io/&size=256" },
    { rank: 12, name: "Quack", description: "Design and interact with characters", tokens: "763M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://quack.im/&size=256" },
    { rank: 13, name: "RolePlai - Ai Chat", description: "new", tokens: "758M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roleplai.app/&size=256", isNew: true },
    { rank: 14, name: "Khui AI", description: "new", tokens: "727M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.khuiai.com/&size=256", isNew: true },
    { rank: 15, name: "New API", description: "LLM gateway, fork of One API", tokens: "701M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/Calcium-Ion/new-api&size=256" },
    { rank: 16, name: "The Hundred-Page Language Models Book", description: "new", tokens: "675M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.thelmbook.com/&size=256", isNew: true },
    { rank: 17, name: "Kortix AI", description: "new", tokens: "629M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kortix.ai/&size=256", isNew: true },
    { rank: 18, name: "Fraction AI", description: "Large perpetual datasets with community ownership", tokens: "599M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dapp.fractionai.xyz/&size=256" },
    { rank: 19, name: "Jupi", description: "Roleplay & fantasy chat", tokens: "591M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.jupi.chat/&size=256" },
    { rank: 20, name: "novelcrafter", description: "Your personal novel writing toolbox. Plan, write and tinker with your story.", tokens: "574M", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://novelcrafter.com/&size=256" },
  ];

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
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

      <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        {/* First Column */}
        <div className="flex flex-col space-y-5">
          {apps.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
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
              <div className="col-span-6 pl-6 text-left">
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
        <div className="flex flex-col space-y-5">
          {appsColumn2.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
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
              <div className="col-span-6 pl-6 text-left">
                <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer">
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">
                  {app.isNew ? (
                    <span className="text-primary">new</span>
                  ) : (
                    app.description
                  )}
                </div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAppsSection;