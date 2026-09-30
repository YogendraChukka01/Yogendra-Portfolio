"use client";

import React from "react";
import { ArrowRight, GitBranch, Bot, Database, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-purple-500/10 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-mono mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
          <span>Building Agentic RAG & LLM Infrastructure</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 max-w-4xl leading-[1.1] mb-6">
          Yogendra Chukka
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 font-mono mb-6">
          AI Engineer
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-sans">
          I build <span className="text-slate-900 dark:text-slate-100 font-semibold">agentic AI systems</span>,{" "}
          <span className="text-slate-900 dark:text-slate-100 font-semibold">RAG infrastructure</span>, and{" "}
          <span className="text-slate-900 dark:text-slate-100 font-semibold">developer tools</span> with a focus on reliability, evaluation, and production-oriented engineering.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects">
            <Button size="lg" className="gap-2 shadow-md hover:shadow-blue-500/20 font-mono text-sm">
              <span>View Flagship Systems</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2 font-mono text-sm">
              <GitBranch className="w-4 h-4" />
              <span>GitHub Profile</span>
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl font-mono text-xs">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
            <Bot className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="truncate">Agentic AI</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
            <Database className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">RAG Pipelines</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
            <Cpu className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="truncate">AI Infrastructure</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
            <Terminal className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="truncate">Developer Tools</span>
          </div>
        </div>

      </div>
    </section>
  );
}
