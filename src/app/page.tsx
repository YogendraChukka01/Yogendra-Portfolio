"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { CommandPalette } from "@/components/navigation/command-palette";
import { Hero } from "@/components/hero/hero";
import { SystemCanvas } from "@/components/three/system-canvas";
import { NarrativeTransition } from "@/components/hero/narrative-transition";
import { About } from "@/components/sections/about";
import { EngineeringFocus } from "@/components/sections/engineering-focus";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { ProjectTimeline } from "@/components/timeline/project-timeline";
import { StackMap } from "@/components/stack/stack-map";
import { GithubActivity } from "@/components/github/github-activity";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/contact/footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-500 font-sans">

      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      <main>
        <Hero />

        <section id="systems" className="max-w-5xl mx-auto px-4 -mt-8 mb-16 relative z-20">
          <SystemCanvas />
        </section>

        <NarrativeTransition />

        <About />

        <EngineeringFocus />

        <FeaturedProjects />

        <ProjectTimeline />

        <StackMap />

        <GithubActivity />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}
