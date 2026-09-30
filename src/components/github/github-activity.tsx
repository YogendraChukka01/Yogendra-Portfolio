"use client";

import React from "react";
import { GitBranch, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function GithubActivity() {
  const verifiedStats = [
    { label: "Public Repositories", value: "7 Repos", detail: "AdaptiveAgent, Chief-AI, Portable-Opencode, etc." },
    { label: "AdaptiveAgent Tests", value: "94 Passed", detail: "Multi-node pipeline & edge case unit tests" },
    { label: "Chief-AI Agents", value: "55 Agents", detail: "11 specialized departments orchestrated" },
    { label: "Target SIH Project", value: "Problem 26044", detail: "Smart Education Portal (Audisankara Univ.)" },
  ];

  return (
    <section id="github" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
          <GitBranch className="w-4 h-4" />
          <span>06 / Building in Public</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
          Verified GitHub Activity & Metrics
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mb-12">
          Strictly verified engineering metrics derived directly from current GitHub repository inspections. Zero manufactured claims.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono mb-10">
          {verifiedStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-500 font-sans">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Source Code Available</span>
            </div>
            <div className="text-lg font-bold">
              YogendraChukka01 on GitHub
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-xl">
              Inspect open-source source code, commit history, test suites, and Docker files directly on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-blue-500/20"
          >
            <GitBranch className="w-4 h-4" />
            <span>Explore Repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
