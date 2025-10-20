import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  CommandDialog,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";

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

// 2. --- Your searchable content (unchanged) ---
const searchableContent = [
  { title: "Home", path: "/", keywords: ["home", "portfolio", "main"] },
  { title: "About", path: "/about", keywords: ["about", "bio", "profile", "oscasavia", "birungi"] },
  { title: "Skills", path: "/skills", keywords: ["skills", "technologies", "expertise", "programming"] },
  { title: "Projects", path: "/projects", keywords: ["projects", "work", "portfolio", "showcase"] },
  { title: "Contact", path: "/contact", keywords: ["contact", "email", "reach", "connect"] },
  { title: "Resume", path: "/resume", keywords: ["resume", "cv", "experience", "education", "certification"] },
];

// 3. --- Main SearchBar Component ---
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Use 'sm' (640px) as our breakpoint
  const isDesktop = useMediaQuery("(min-width: 640px)");

  // Keyboard shortcut (unchanged)
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

  // Navigation function (unchanged)
  const runCommand = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  // 4. --- We extract the list into its own component ---
  // This avoids duplicating the list markup for the Dialog and Drawer
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
            {/* You could add icons here, e.g., <HomeIcon className="mr-2" /> */}
            <span>{item.title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );

  return (
    <>
      {/* Trigger Button (unchanged) */}
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        className="fixed top-20 right-6 z-40 glass-card rounded-lg hover:bg-primary/20 transition-all"
      >
        <Search className="w-5 h-5" />
      </Button>

      {/* 5. --- Conditional Rendering --- */}
      {isDesktop ? (
        // --- DESKTOP version: CommandDialog ---
        <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
          <CommandInput placeholder="Search portfolio..." />
          <SearchListContent />
        </CommandDialog>
      ) : (
        // --- MOBILE version: Drawer ---
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="inset-x-px">
            {/* We need to wrap the contents in a <Command> component
              and add some padding, as DrawerContent has none by default.
            */}
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
