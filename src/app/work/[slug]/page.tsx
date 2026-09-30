import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, GitBranch, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 space-y-12">

        <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Projects</span>
        </Link>

        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
              {project.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Verified GitHub Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {project.name}
          </h1>

          <p className="text-lg font-mono text-blue-600 dark:text-blue-400">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-2">
                <GitBranch className="w-4 h-4" />
                <span>GitHub Repository</span>
              </Button>
            </a>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Application</span>
                </Button>
              </a>
            )}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 font-sans">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Executive Overview
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {project.caseStudy.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
              The Engineering Problem
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
              The Architectural Solution
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
            Key Engineering & Design Decisions
          </h2>

          <div className="space-y-3">
            {project.caseStudy.keyDecisions.map((dec, i) => (
              <div key={i} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 font-mono">
                  {i + 1}. {dec.title}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dec.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {project.caseStudy.pipelineSteps && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
              Pipeline Execution Sequence
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.pipelineSteps.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-1 font-mono">
                  <div className="text-xs text-blue-400 font-bold">{step.step}</div>
                  <p className="text-xs text-slate-300 font-sans">{step.description}</p>
                  <span className="inline-block text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {step.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.caseStudy.evaluationMetrics && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
              Evaluation & Benchmarks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              {project.caseStudy.evaluationMetrics.map((evalItem) => (
                <div key={evalItem.metric} className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-200 space-y-1">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase">{evalItem.metric}</div>
                  <div className="text-xl font-extrabold text-white">{evalItem.score}</div>
                  <p className="text-[10px] text-emerald-300/80 font-sans">{evalItem.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3 font-mono">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Technology & Libraries Used
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
