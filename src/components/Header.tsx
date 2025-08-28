import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Download, Sun, Moon, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 right-20 z-50">
      <div className="relative">
        {/* Logo & Name - Clickable to toggle menu */}
        <button
          onClick={toggleMenu}
          className="group inline-flex items-center gap-3 rounded-full px-3 py-2 glass ring-1 ring-primary/15 hover:ring-primary/25 hover:shadow-glow transition-all hover-scale"
          aria-label="Toggle navigation menu"
        >
          <img
            src="/lovable-uploads/mipic.jpg"
            alt="MD BADHON"
            className="h-8 w-8 rounded-full object-cover shadow"
          />
          <span className="font-semibold tracking-wide text-foreground">MD BADHON</span>
          <div className={`ml-2 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Expanded Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 animate-fade-in animate-scale-in">
            <div className="flex flex-col gap-2">
              {/* Navigation Menu */}
              <nav className="flex flex-col gap-1 glass rounded-2xl p-3 ring-1 ring-primary/15 min-w-[200px] animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    scrollToSection('skills');
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary justify-start w-full"
                >
                  Skills
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    scrollToSection('projects');
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary justify-start w-full"
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary justify-start w-full"
                >
                  Contact
                </Button>
              </nav>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2 glass rounded-2xl p-3 ring-1 ring-primary/15 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0 hover:text-primary hover-scale"
                >
                  <a
                    href="https://github.com/Jhonpp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0 hover:text-primary hover-scale"
                >
                  <a
                    href="https://www.linkedin.com/in/md-badhon-305578244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0 hover:text-primary hover-scale"
                >
                  <a
                    href="https://www.facebook.com/md.badhon.400298m"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Download Resume */}
              <Button
                variant="default"
                size="sm"
                className="rounded-2xl px-4 py-3 shadow-glow hover:shadow-xl transition-all animate-fade-in hover-scale"
                style={{ animationDelay: '0.3s' }}
                asChild
              >
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 w-full"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Backdrop to close menu when clicking outside */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
