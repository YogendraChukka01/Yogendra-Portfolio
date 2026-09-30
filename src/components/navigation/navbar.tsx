"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Command, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = ["home", "systems", "projects", "timeline", "stack", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#projects", id: "projects" },
    { name: "Systems", href: "#systems", id: "systems" },
    { name: "Timeline", href: "#timeline", id: "timeline" },
    { name: "Stack", href: "#stack", id: "stack" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass-panel rounded-full px-4 py-2 shadow-sm border border-slate-200/80 dark:border-slate-800/80">

        <Link href="/" className="flex items-center gap-2 group pl-2">
          <div className="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm border border-blue-500/20 group-hover:scale-105 transition-transform">
            YC
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-wide uppercase text-slate-900 dark:text-slate-100 font-mono">
              Yogendra Chukka
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              AI Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeSection === item.id
                  ? "bg-slate-200/80 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-800/40"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-mono border border-slate-200/60 dark:border-slate-700/60 transition-colors cursor-pointer"
            title="Command Palette (Ctrl+K / ⌘K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1 rounded">⌘K</span>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          )}

          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 transition-colors border border-blue-500/20"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 glass-panel rounded-2xl flex flex-col gap-3 shadow-lg border border-slate-200 dark:border-slate-800 font-mono text-sm animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-left"
          >
            <Command className="w-4 h-4" />
            <span>Open Command Palette (⌘K)</span>
          </button>
        </div>
      )}
    </header>
  );
}
