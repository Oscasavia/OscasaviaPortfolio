const Footer = () => {
  return (
    <footer className="border-t border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oscasavia Birungi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
