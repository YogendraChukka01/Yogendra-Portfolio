"use client";

import React from "react";
import { Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
          <Code2 className="w-4 h-4" />
          <span>01 / Engineering Identity</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-8">
          About & Core Identity
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
            <p>
              I am an <strong className="text-slate-900 dark:text-slate-100 font-semibold">AI Engineer</strong> specializing in stateful agentic orchestration, RAG infrastructure, and developer systems. Rather than relying on fragile linear chains, I build self-correcting pipelines that incorporate explicit evidence evaluation, confidence metrics, and multi-provider fallbacks.
            </p>
            <p>
              My primary focus is bridging the gap between cutting-edge LLM research and production software engineering — ensuring AI systems operate with determinism, high context precision, and local-first privacy when required.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm font-mono text-xs space-y-4">
            <div className="text-slate-400 font-semibold uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
              Identity Matrix
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Primary Focus</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Agentic AI & RAG</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Core Languages</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Python / TypeScript</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Orchestration</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">LangGraph / pydantic-ai</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Build Philosophy</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Evaluated & Modular</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
