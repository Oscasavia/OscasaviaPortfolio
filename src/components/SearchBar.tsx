import { useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const searchableContent = [
    { title: "Home", path: "/", keywords: ["home", "portfolio", "main"] },
    { title: "About", path: "/about", keywords: ["about", "bio", "profile", "oscasavia", "birungi"] },
    { title: "Skills", path: "/skills", keywords: ["skills", "technologies", "expertise", "programming"] },
    { title: "Projects", path: "/projects", keywords: ["projects", "work", "portfolio", "showcase"] },
    { title: "Contact", path: "/contact", keywords: ["contact", "email", "reach", "connect"] },
    { title: "Resume", path: "/resume", keywords: ["resume", "cv", "experience", "education", "certification"] },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const results = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(query.toLowerCase())),
    );

    if (results.length > 0) {
      navigate(results[0].path);
      setQuery("");
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-20 right-6 z-40">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} size="icon" className="glass-card hover:bg-primary/20 transition-all">
          <Search className="w-5 h-5" />
        </Button>
      ) : (
        <form onSubmit={handleSearch} className="glass-card p-2 animate-scale-in">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search portfolio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-64 bg-transparent border-0 focus-visible:ring-0"
              autoFocus
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
