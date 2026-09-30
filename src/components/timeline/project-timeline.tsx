"use client";

import React from "react";
import { TIMELINE_EVENTS } from "@/data/projects";
import { Milestone } from "lucide-react";

export function ProjectTimeline() {
  return (
    <section id="timeline" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
          <Milestone className="w-4 h-4" />
          <span>04 / Engineering Evolution</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
          Project Evolution Timeline
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mb-12">
          A chronologically verified progression from early desktop automation scripts to production-grade Agentic RAG and multi-agent operating systems.
        </p>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-10 pl-6 md:pl-8">
          {TIMELINE_EVENTS.map((event) => (
            <div key={event.title} className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {event.year} — {event.stage}
                  </span>
                  <span className="text-slate-400 text-[11px]">{event.project}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {event.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-4 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <span>Impact:</span>
                  <span className="font-sans font-normal text-slate-700 dark:text-slate-300">{event.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {event.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
