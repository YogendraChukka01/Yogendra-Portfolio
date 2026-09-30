"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  GitBranch,
  Sun,
  Moon,
  FolderGit2,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
  X,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (action: () => void) => {
    action();
    onClose();
    setQuery("");
  };

  const filteredProjects = PROJECTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col font-mono text-sm">

        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command or search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
          {!query && (
            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </div>
          )}

          {!query && (
            <>
              <button
                onClick={() => handleSelect(() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                })}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-blue-500" />
                  <span>View Featured Engineering Projects</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => handleSelect(() => {
                  const el = document.getElementById("systems");
                  el?.scrollIntoView({ behavior: "smooth" });
                })}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  <span>Explore Interactive Systems Architecture</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => handleSelect(() => {
                  const el = document.getElementById("stack");
                  el?.scrollIntoView({ behavior: "smooth" });
                })}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-500" />
                  <span>View AI & Infrastructure Stack Map</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </>
          )}

          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-2">
            Project Case Studies
          </div>
          {filteredProjects.map((p) => (
            <button
              key={p.slug}
              onClick={() => handleSelect(() => router.push(`/work/${p.slug}`))}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-slate-900 dark:text-slate-100">{p.name}</span>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  {p.category}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          ))}

          {!query && (
            <>
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-2">
                Actions & Links
              </div>

              <button
                onClick={() => handleSelect(() => setTheme(theme === "dark" ? "light" : "dark"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                  <span>Toggle Light / Dark Theme</span>
                </div>
              </button>

              <a
                href="https://github.com/YogendraChukka01"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>GitHub Profile</span>
                </div>
              </a>
            </>
          )}

        </div>

        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigate with ⌘K</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
}
