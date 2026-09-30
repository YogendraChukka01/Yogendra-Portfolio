"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export function NarrativeTransition() {
  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-center md:text-left">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
            01
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Foundation</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">I build AI systems.</span>
          </div>
        </div>

        <ArrowDown className="w-4 h-4 text-slate-400 rotate-0 md:-rotate-90 shrink-0" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs shrink-0">
            02
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Philosophy</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Here is how I think.</span>
          </div>
        </div>

        <ArrowDown className="w-4 h-4 text-slate-400 rotate-0 md:-rotate-90 shrink-0" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
            03
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Evidence</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Here is what I have built.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
