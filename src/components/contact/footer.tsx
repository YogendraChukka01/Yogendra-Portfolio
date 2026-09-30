"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-900 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-slate-200 text-sm uppercase tracking-wider">
            Yogendra Chukka
          </span>
          <span className="text-[11px] text-slate-500">
            AI Engineer · Agentic AI · RAG · AI Infrastructure
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://linkedin.com/in/yogendrachukka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a href="#contact" className="hover:text-slate-200 transition-colors">
            Contact
          </a>
        </div>

        <div className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} Yogendra Chukka. Next.js 15 + Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}
