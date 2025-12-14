import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CommandDialog } from "@/components/ui/command";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = window.matchMedia(query);
    setValue(result.matches);
    result.addEventListener("change", onChange);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

const searchableContent = [
  { title: "Home", path: "/", keywords: ["home", "portfolio", "main"] },
  { title: "About", path: "/about", keywords: ["about", "bio", "profile", "oscasavia", "birungi"] },
  { title: "Skills", path: "/skills", keywords: ["skills", "technologies", "expertise", "programming"] },
  { title: "Projects", path: "/projects", keywords: ["projects", "work", "portfolio", "showcase"] },
  { title: "Contact", path: "/contact", keywords: ["contact", "email", "reach", "connect"] },
  { title: "Resume", path: "/resume", keywords: ["resume", "cv", "experience", "education", "certification"] },
];

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const SearchListContent = () => (
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Pages">
        {searchableContent.map((item) => (
          <CommandItem
            key={item.path}
            value={`${item.title} ${item.keywords.join(" ")}`}
            onSelect={() => runCommand(item.path)}
          >
            <span>{item.title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className={`rounded-full hover:bg-secondary transition-all ${className}`}
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </Button>

      {isDesktop ? (
        <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
          <CommandInput placeholder="Search portfolio..." />
          <SearchListContent />
        </CommandDialog>
      ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="inset-x-px">
            <div className="p-4">
              <Command>
                <CommandInput placeholder="Search portfolio..." />
                <SearchListContent />
              </Command>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default SearchBar;
