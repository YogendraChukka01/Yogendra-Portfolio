"use client";

import React, { useState } from "react";
import { Bot } from "lucide-react";

export function ChiefAiOrg() {
  const [selectedDept, setSelectedDept] = useState("Engineering");

  const departments = [
    { name: "Engineering", agents: ["Frontend Lead", "Backend Lead", "Database Specialist", "API Architect"], color: "text-blue-400" },
    { name: "Design & UX", agents: ["UX Researcher", "Motion Designer", "UI Components", "Brand Strategist"], color: "text-purple-400" },
    { name: "AI / ML", agents: ["Model Evaluator", "Prompt Engineer", "RAG Tuning", "Agentic Router"], color: "text-emerald-400" },
    { name: "QA & Testing", agents: ["Test Suite Lead", "Mock Executor", "Security Auditor", "Performance Tester"], color: "text-amber-400" },
    { name: "DevOps & Cloud", agents: ["CI/CD Pipeline", "Docker Packaging", "SSE Streaming Server", "Environment Config"], color: "text-pink-400" },
  ];

  const current = departments.find((d) => d.name === selectedDept) || departments[0];

  return (
    <div className="w-full rounded-2xl bg-slate-950 text-slate-100 p-6 border border-slate-800 font-mono shadow-2xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block mb-1">
            Hierarchical Multi-Agent Topology
          </span>
          <h4 className="text-lg font-bold text-white">Chief-AI: 11 Departments & 55 Specialist Sub-Agents</h4>
        </div>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
          pydantic-ai Framework
        </span>
      </div>

      <div className="my-6 p-4 rounded-xl bg-purple-950/40 border border-purple-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-500/20">
            CHIEF
          </div>
          <div>
            <div className="text-xs font-bold text-white">Chief Orchestrator</div>
            <div className="text-[11px] text-purple-300">Goal decomposition, task routing & output synthesis</div>
          </div>
        </div>
        <span className="text-[10px] bg-purple-900/60 text-purple-200 px-2 py-1 rounded">
          Master Controller
        </span>
      </div>

      <div className="flex flex-wrap gap-2 py-3 border-y border-slate-800">
        {departments.map((dept) => (
          <button
            key={dept.name}
            onClick={() => setSelectedDept(dept.name)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedDept === dept.name
                ? "bg-slate-800 text-white border border-slate-700 shadow"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            {dept.name}
          </button>
        ))}
      </div>

      <div className="pt-6">
        <div className="text-xs text-slate-400 mb-3">
          Specialist Sub-Agents in <span className="font-bold text-white">{current.name}</span>:
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {current.agents.map((agent) => (
            <div
              key={agent}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs text-slate-200"
            >
              <Bot className={`w-4 h-4 shrink-0 ${current.color}`} />
              <span className="truncate">{agent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
