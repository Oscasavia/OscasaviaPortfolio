import { useState, useEffect } from "react";
import {
  Search,
  Home,
  User,
  Code2,
  Layers,
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { projects } from "@/data/projects";
import { resumeProfile } from "@/data/resume";

const pages = [
  { title: "Home", path: "/", icon: Home, keywords: ["portfolio", "main"] },
  {
    title: "About",
    path: "/about",
    icon: User,
    keywords: ["bio", "profile", "oscasavia", "birungi"],
  },
  {
    title: "Skills",
    path: "/skills",
    icon: Code2,
    keywords: [
      "technologies",
      "expertise",
      "programming",
      "automation",
      "DevOps",
      "React",
      "Flutter",
      ...resumeProfile.skillCategories.flatMap((category) => category.skills),
    ],
  },
  {
    title: "Projects",
    path: "/projects",
    icon: Layers,
    keywords: ["work", "portfolio", "showcase"],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Mail,
    keywords: ["email", "reach", "connect"],
  },
  {
    title: "Resume",
    path: "/resume",
    icon: FileText,
    keywords: ["cv", "experience", "education", "certification", "CVS"],
  },
];

const SearchBar = ({ className = "" }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
  const select = (path: string) => {
    setOpen(false);
    navigate(path);
  };
  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full hover:bg-secondary ${className}`}
          aria-label="Search"
          aria-keyshortcuts="Control+k Meta+k"
        >
          <Search className="h-5 w-5" />
        </Button>
      }
    >
      <CommandInput
        placeholder="Search pages or projects…"
        aria-label="Search portfolio"
      />
      <CommandList>
        <CommandEmpty>
          No matches. Try “resume”, “Flutter”, or a project name.
        </CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.path}
              value={page.title}
              keywords={page.keywords}
              onSelect={() => select(page.path)}
            >
              <page.icon className="text-muted-foreground" />
              <span>{page.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.id}
              value={project.title}
              keywords={[project.subtitle, ...project.tech]}
              onSelect={() => select(`/projects#${project.id}`)}
            >
              <ArrowUpRight className="text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate">{project.title}</span>
              <span className="text-xs text-muted-foreground">
                {project.category}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <div className="border-t px-5 py-3 text-xs text-muted-foreground">
        <span className="hidden sm:inline">
          ↑ ↓ to navigate · Enter to open ·{" "}
        </span>
        Esc to close
      </div>
    </CommandDialog>
  );
};
export default SearchBar;
