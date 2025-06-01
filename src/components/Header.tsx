import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="hidden font-bold sm:inline-block">OpenRouter</span>
            </div>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search models"
                className="pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
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
            <Button size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;