"use client";

import React, { useState } from "react";
import { STACK_CATEGORIES } from "@/data/projects";
import { Layers } from "lucide-react";

export function StackMap() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <section id="stack" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>05 / Verified Tech Stack</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
          Interactive Stack Map
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mb-12">
          Click or hover any technology to see where and how it is used across verified GitHub repositories.
        </p>

        <div className="space-y-8">
          {STACK_CATEGORIES.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                {cat.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono">
                {cat.items.map((item) => {
                  const isSelected = selectedTech === item.name;
                  return (
                    <div
                      key={item.name}
                      onClick={() => setSelectedTech(isSelected ? null : item.name)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-blue-950/80 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-102"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-blue-600 dark:text-blue-400 mb-2 font-medium">
                        {item.role}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.usedIn.map((repo) => (
                          <span
                            key={repo}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {repo}
                          </span>
                        ))}
                      </div>

                      <p className="text-[10px] text-slate-500 font-sans leading-tight">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
