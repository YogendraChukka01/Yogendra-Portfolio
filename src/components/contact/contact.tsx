"use client";

import React, { useState } from "react";
import { Mail, GitBranch, Globe, FileText, ArrowUpRight, Copy, Check, Send } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yogendrachukka01@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white border-t border-slate-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 font-mono text-xs">
          <Send className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
          Let’s build something useful.
        </h2>

        <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          Open to AI engineering collaborations, agentic system design, research inquiries, and full-time software engineering roles.
        </p>

        <div className="inline-flex items-center gap-3 p-2 pl-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-sm max-w-md w-full justify-between shadow-xl">
          <div className="flex items-center gap-2 text-slate-300 truncate">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="truncate">{email}</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs">
          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="https://linkedin.com/in/yogendrachukka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="https://github.com/YogendraChukka01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume / GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
