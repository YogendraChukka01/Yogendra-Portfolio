"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ArchitectureNode } from "@/types";
import { Play, ArrowRight, Activity } from "lucide-react";

export function AdaptiveAgentPipeline() {
  const adaptiveAgent = PROJECTS.find((p) => p.slug === "adaptive-agent");
  const nodes = adaptiveAgent?.architectureNodes || [];
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(nodes[0] || null);
  const [simulating, setSimulating] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState<number | null>(null);

  const runSimulation = () => {
    setSimulating(true);
    let current = 0;
    setActiveStepIdx(0);
    setActiveNode(nodes[0]);

    const interval = setInterval(() => {
      current++;
      if (current < nodes.length) {
        setActiveStepIdx(current);
        setActiveNode(nodes[current]);
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 800);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950 text-slate-100 p-6 border border-slate-800 shadow-2xl font-mono">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>14-Node Stateful LangGraph Execution Graph</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            AdaptiveAgent Interactive Architecture Pipeline
          </h4>
        </div>

        <button
          onClick={runSimulation}
          disabled={simulating}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-500/20"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{simulating ? "Executing Pipeline..." : "Simulate Query Run"}</span>
        </button>
      </div>

      <div className="py-8 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-[700px]">
          {nodes.map((node, index) => {
            const isActive = activeStepIdx === index || activeNode?.id === node.id;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setActiveNode(node)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all cursor-pointer min-w-[110px] ${
                    isActive
                      ? "bg-blue-950/80 border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-105"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span className="text-[10px] text-slate-500 font-mono">0{index + 1}</span>
                  <span className="text-xs font-bold leading-tight truncate w-full">{node.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {node.category}
                  </span>
                </button>

                {index < nodes.length - 1 && (
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      activeStepIdx === index ? "text-blue-400" : "text-slate-700"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {activeNode && (
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start justify-between gap-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{activeNode.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                {activeNode.tech}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans">{activeNode.description}</p>
            <p className="text-[11px] text-slate-400">{activeNode.details}</p>
          </div>

          <div className="shrink-0 font-mono text-[10px] text-slate-500 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
            Node ID: {activeNode.id}
          </div>
        </div>
      )}
    </div>
  );
}
