import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a className="flex items-center space-x-2" href="/">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <span className="hidden font-bold sm:inline-block text-xl">OpenRouter</span>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-4 ml-6">
            <Button variant="ghost" size="sm">
              Models
            </Button>
            <Button variant="ghost" size="sm">
              Chat
            </Button>
            <Button variant="ghost" size="sm">
              Rankings
            </Button>
            <Button variant="ghost" size="sm">
              Docs
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search models"
              className="pl-8 w-[240px] lg:w-[320px]"
            />
          </div>
          
          <Button size="sm" className="hidden md:flex">
            Sign In
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;