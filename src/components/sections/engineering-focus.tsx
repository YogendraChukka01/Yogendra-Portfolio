"use client";

import React, { useState } from "react";
import { ENGINEERING_PILLARS } from "@/data/projects";
import { Bot, Database, Cpu, Terminal, Layers } from "lucide-react";

export function EngineeringFocus() {
  const [, setActivePillar] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-6 h-6 text-blue-500" />;
      case "Database": return <Database className="w-6 h-6 text-emerald-500" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-purple-500" />;
      case "Terminal": return <Terminal className="w-6 h-6 text-amber-500" />;
      default: return <Layers className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="focus" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>02 / Technical Pillars</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
          What I Build
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mb-12">
          Four foundational pillars defining my AI engineering workflow, system architecture, and open-source projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              onMouseEnter={() => setActivePillar(pillar.title)}
              onMouseLeave={() => setActivePillar(null)}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  {getIcon(pillar.icon)}
                </div>

                <div className="flex gap-1">
                  {pillar.projects.map((proj) => (
                    <span
                      key={proj}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {pillar.title}
              </h3>

              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium mb-3">
                {pillar.subtitle}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 font-mono text-[11px]">
                {pillar.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
