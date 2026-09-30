"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { AdaptiveAgentPipeline } from "@/components/architecture/adaptive-agent-pipeline";
import { ChiefAiOrg } from "@/components/architecture/chief-ai-org";
import { ArrowUpRight, GitBranch, ExternalLink, Bot, Sparkles, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const adaptiveAgent = PROJECTS.find((p) => p.slug === "adaptive-agent")!;
  const chiefAi = PROJECTS.find((p) => p.slug === "chief-ai")!;
  const portableOpencode = PROJECTS.find((p) => p.slug === "portable-opencode")!;
  const smartEdu = PROJECTS.find((p) => p.slug === "smart-education-portal")!;
  const voiceAssistant = PROJECTS.find((p) => p.slug === "voice-assistant-python")!;

  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 space-y-20">

        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>03 / Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            Featured AI Systems & Projects
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl">
            Real open-source engineering work verified from public GitHub repositories, complete with interactive architecture visualizations and deep case studies.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-8">

          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[11px] font-mono font-semibold mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Flagship Engineering Project</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                {adaptiveAgent.name}
              </h3>
              <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mt-1">
                {adaptiveAgent.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono">
              <a href={adaptiveAgent.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Button>
              </a>

              <Link href={`/work/${adaptiveAgent.slug}`}>
                <Button size="sm" className="gap-1.5">
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            {adaptiveAgent.metrics?.map((m) => (
              <div key={m.label} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{m.value}</div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {adaptiveAgent.longDescription}
          </p>

          <AdaptiveAgentPipeline />
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-8">

          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[11px] font-mono font-semibold mb-3">
                <Bot className="w-3 h-3" />
                <span>Multi-Agent System</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                {chiefAi.name}
              </h3>
              <p className="text-sm font-mono text-purple-600 dark:text-purple-400 mt-1">
                {chiefAi.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono">
              <a href={chiefAi.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Button>
              </a>

              <Link href={`/work/${chiefAi.slug}`}>
                <Button size="sm" className="gap-1.5">
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {chiefAi.longDescription}
          </p>

          <ChiefAiOrg />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                Infrastructure / Developer Tools
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {portableOpencode.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {portableOpencode.description}
              </p>

              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {portableOpencode.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80 font-mono text-xs">
              <a href={portableOpencode.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>

              <Link href={`/work/${portableOpencode.slug}`} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold mb-2">
                Full-Stack / SIH 2026 Portal
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {smartEdu.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {smartEdu.description}
              </p>

              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {smartEdu.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80 font-mono text-xs">
              <a href={smartEdu.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Portal</span>
              </a>

              <Link href={`/work/${smartEdu.slug}`} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
              Historical Landmark / Early Experiment (12th Std)
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {voiceAssistant.name}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-sans text-xs mt-1">
              {voiceAssistant.description}
            </p>
          </div>

          <a
            href={voiceAssistant.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>GitHub Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
