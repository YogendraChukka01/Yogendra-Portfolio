import { Project, EngineeringPillar, TimelineEvent, StackCategory } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'adaptive-agent',
    name: 'AdaptiveAgent',
    tagline: 'Production-grade Agentic RAG Platform with 14-Node LangGraph Pipeline',
    category: 'Flagship',
    maturity: 'Flagship',
    description: 'Context-aware AI assistants for private knowledge bases featuring LangGraph reasoning, multi-provider LLM support, local-first inference, and LLM-as-judge evaluation.',
    longDescription: 'AdaptiveAgent is an open-source, enterprise-ready Agentic RAG system built to solve privacy, explainability, and provider lock-in for enterprise knowledge bases. It implements a 14-node LangGraph orchestration graph with explicit evidence validation, confidence scoring, risk assessment, and automated quality evaluation.',
    problem: 'Enterprise knowledge bases require total data privacy, explainability, and multi-LLM flexibility. Standard RAG pipelines lock teams into single cloud vendors, lack confidence metrics, hallucinate without guardrails, and provide zero visibility into reasoning steps.',
    solution: 'Built a modular, self-correcting 14-node agentic architecture using LangGraph and FastAPI. Features fallback routing across local Ollama instances and external cloud models (OpenAI/Anthropic/Groq), vector store hybrid search (PostgreSQL/pgvector/Chroma), and real-time confidence & risk verification.',
    technologies: ['Python', 'LangGraph', 'FastAPI', 'Next.js 15', 'PostgreSQL', 'pgvector', 'ChromaDB', 'Docker', 'Ollama', 'Pytest', 'LLM-as-Judge'],
    keyFeatures: [
      '14-Node Directed Execution Graph with stateful LangGraph routing',
      'Multi-Provider LLM Fallback (Local Ollama, OpenAI, Anthropic, Groq)',
      'LLM-as-Judge automated evaluation and confidence scoring',
      'Local-first privacy architecture with PostgreSQL + pgvector',
      'Dockerized deployment with automated GitHub Actions CI',
      '94+ Automated Tests validating pipeline nodes and edge cases'
    ],
    githubUrl: 'https://github.com/YogendraChukka01/AdaptiveAgent',
    featured: true,
    metrics: [
      { label: 'Pipeline Nodes', value: '14 Nodes' },
      { label: 'Test Suite', value: '94 Passed' },
      { label: 'Architecture', value: 'LangGraph' },
      { label: 'Inference', value: 'Local-First' }
    ],
    architectureNodes: [
      { id: 'user', name: 'User Input', category: 'input', description: 'Query ingestion and sanitization', tech: 'FastAPI / Pydantic', details: 'Validates input schema and establishes execution session state' },
      { id: 'validator', name: 'Input Validator', category: 'process', description: 'Checks safety, prompt injection, and intent', tech: 'Custom Guardrails', details: 'Ensures query bounds and domain relevance before processing' },
      { id: 'planner', name: 'Task Planner', category: 'agent', description: 'Decomposes complex requests into sub-queries', tech: 'LangGraph State', details: 'Formulates multi-step retrieval strategy if required' },
      { id: 'retrieval', name: 'Hybrid Retrieval', category: 'retrieval', description: 'Dense vector search + BM25 keyword matching', tech: 'pgvector / ChromaDB', details: 'Fetches top-k document chunks with similarity reranking' },
      { id: 'evidence', name: 'Evidence Evaluator', category: 'eval', description: 'Assesses document relevance and ground truth', tech: 'Reranker Model', details: 'Filters out noise and ungrounded context chunks' },
      { id: 'reasoning', name: 'Reasoning Engine', category: 'agent', description: 'Synthesizes context with model reasoning', tech: 'LLM Multi-Provider', details: 'Generates candidate answer using routed model (Ollama/Groq/OpenAI)' },
      { id: 'confidence', name: 'Confidence Scorer', category: 'eval', description: 'Calculates answer confidence threshold', tech: 'Logit Analysis', details: 'Evaluates claim support against retrieved evidence' },
      { id: 'risk', name: 'Risk Assessor', category: 'eval', description: 'Checks for potential hallucination or domain breach', tech: 'LLM-as-Judge', details: 'Routes back to Planner if answer quality is below safety threshold' },
      { id: 'response', name: 'Response Delivery', category: 'output', description: 'Formats final response with citation lineage', tech: 'FastAPI Stream', details: 'Streams markdown output with clear source attributions' }
    ],
    caseStudy: {
      overview: 'AdaptiveAgent represents a shift from fragile naive RAG to reliable, stateful Agentic RAG built for mission-critical software environments.',
      problemStatement: 'Naive RAG pipelines suffer from retrieval noise, context window saturation, unverified hallucinations, and single-provider downtime risks.',
      keyDecisions: [
        { title: 'LangGraph stateful graph over linear chains', explanation: 'Linear chains fail when retrieval returns weak evidence. LangGraph allows explicit loopbacks to re-plan queries or fallback to alternative models.' },
        { title: 'Local-first with cloud fallback', explanation: 'Privacy-sensitive data can run entirely on local Ollama instances, while cloud LLMs serve as fallback for high-complexity reasoning.' },
        { title: 'LLM-as-Judge Evaluation', explanation: 'Integrated automated scoring nodes that judge faithfulness, answer relevance, and context precision on every response.' }
      ],
      pipelineSteps: [
        { step: '01. Ingestion', description: 'Query schema validation & prompt security filtering', tech: 'FastAPI / Guardrails' },
        { step: '02. Plan & Decompose', description: 'Intent classification and multi-step retrieval planning', tech: 'LangGraph Node' },
        { step: '03. Hybrid Retrieval', description: 'Dense embeddings + BM25 keyword matching with pgvector', tech: 'pgvector / Chroma' },
        { step: '04. Evidence Reranking', description: 'Cross-encoder scoring to filter out irrelevant chunks', tech: 'Reranker' },
        { step: '05. Synthesis & Reasoning', description: 'Contextual generation with selected provider', tech: 'Ollama / Groq / OpenAI' },
        { step: '06. Judge & Verify', description: 'Hallucination scoring and confidence verification', tech: 'LLM-as-Judge' }
      ],
      evaluationMetrics: [
        { metric: 'Faithfulness', score: '98.2%', explanation: 'Measured via automated LLM-as-Judge hallucination checks against source evidence' },
        { metric: 'Answer Relevance', score: '96.5%', explanation: 'Evaluation of generated output directly addressing user intent' },
        { metric: 'Context Precision', score: '94.0%', explanation: 'Ratio of relevant retrieved chunks to total context length' }
      ],
      challenges: [
        'Managing graph state synchronization across asynchronous multi-provider LLM API calls.',
        'Optimizing hybrid search performance in PostgreSQL pgvector under high concurrent querying.',
        'Designing zero-latency confidence scoring without doubling inference overhead.'
      ]
    }
  },
  {
    slug: 'chief-ai',
    name: 'Chief-AI',
    tagline: 'Multi-Agent Operating System with 11 Departments and 55 Specialist Agents',
    category: 'Major',
    maturity: 'Major',
    description: 'A multi-agent orchestrator for software projects built with Python and pydantic-ai, compiling into native OpenCode sub-agents.',
    longDescription: 'Chief-AI introduces a single Chief orchestrator that manages 11 specialized software departments (Engineering, Design, Research, QA, DevOps, AI/ML, etc.) housing 55 dedicated specialist sub-agents. Users communicate with one Chief, which decomposes complex software engineering goals into dependency-aware agent execution graphs.',
    problem: 'Software engineering tasks require diverse domain expertise (UX, database design, testing, infrastructure, code review). Managing individual agent prompts manually leads to fragmented context, missed tasks, and poor cross-discipline coordination.',
    solution: 'Designed a hierarchical multi-agent framework where the Chief agent interprets goals, schedules tasks across 55 specialist sub-agents, Streams execution state via SSE, and consolidates outputs into clean software artifacts.',
    technologies: ['Python 3.10+', 'pydantic-ai', 'OpenCode Native', 'FastAPI', 'SSE Streaming', 'Pytest', 'React', 'Tailwind CSS'],
    keyFeatures: [
      '11 Department Organizational Structure with 55 Specialist Agents',
      'Chief Orchestrator with task decomposition & dependency scheduling',
      'Native OpenCode runtime integration eliminating external API key overhead',
      'Real-time Server-Sent Events (SSE) streaming web UI',
      'Built-in Memory AI & MockExecutor test registry',
      'Full test suite using pytest'
    ],
    githubUrl: 'https://github.com/YogendraChukka01/Chief-AI',
    featured: true,
    metrics: [
      { label: 'Departments', value: '11 Depts' },
      { label: 'Specialist Agents', value: '55 Agents' },
      { label: 'Framework', value: 'pydantic-ai' },
      { label: 'Integration', value: 'OpenCode Native' }
    ],
    caseStudy: {
      overview: 'Chief-AI models an entire software engineering organization as an orchestrated multi-agent network.',
      problemStatement: 'Single LLM prompts cannot reliably handle end-to-end software delivery requiring frontend architecture, database migrations, security checks, and QA simultaneously.',
      keyDecisions: [
        { title: 'Hierarchical Chief -> Specialist Topology', explanation: 'Instead of mesh agent chatter, a single Chief maintains master state and delegates isolated tasks to domain specialists.' },
        { title: 'OpenCode Native Execution', explanation: 'Compiles agents directly to native OpenCode sub-agents, leveraging system tools and local workspaces safely.' },
        { title: 'Structured Output with Pydantic', explanation: 'Uses pydantic-ai to enforce strictly typed task contracts between departments.' }
      ],
      challenges: [
        'Preventing cascading errors when a specialized sub-agent returns invalid artifacts.',
        'Maintaining global project memory across long-running task decomposition chains.'
      ]
    }
  },
  {
    slug: 'portable-opencode',
    name: 'Portable-Opencode',
    tagline: 'Zero-Installation USB Portable AI Development Environment for Windows & Linux',
    category: 'Infrastructure',
    maturity: 'Major',
    description: 'A self-contained, USB-first OpenCode portable environment with automatic platform detection and zero host machine footprint.',
    longDescription: 'Portable-Opencode enables software engineers and AI developers to carry their entire OpenCode setup, Node.js runtimes, workspace configurations, caches, and local extensions on a portable drive. It automatically detects Windows (x64/ARM64) or Linux environments and boots instantly.',
    problem: 'Setting up AI coding assistants across restricted corporate environments, university labs, or secondary machines requires complex installation, admin permissions, and environment variable pollution.',
    solution: 'Built a launcher-based portable architecture that encapsulates Node.js runtimes, application assets, and workspace caches within a USB-local directory structure with zero footprint on the host OS.',
    technologies: ['Node.js Portable', 'Shell Scripting', 'Batch / PowerShell', 'GitHub Actions CI', 'Cross-Platform Windows/Linux'],
    keyFeatures: [
      'USB-first portable architecture with zero registry or system installation',
      'Cross-platform support for Windows (x64/ARM64) and Linux (x64/ARM64)',
      'Integrated Node.js runtime isolation & workspace caching',
      'Automated smoke test CI pipelines on GitHub Actions',
      'Platform detection launcher with custom environment bootstrapping'
    ],
    githubUrl: 'https://github.com/YogendraChukka01/Portable-Opencode',
    featured: true,
    metrics: [
      { label: 'Footprint', value: 'Zero Host' },
      { label: 'Platforms', value: 'Win / Linux' },
      { label: 'Portability', value: 'USB-First' },
      { label: 'CI Pipeline', value: 'Smoke Tested' }
    ],
    caseStudy: {
      overview: 'Developer infrastructure project enabling instant AI-assisted coding anywhere.',
      problemStatement: 'Host environment dependency lock-in prevents seamless development across guest machines and secure workstations.',
      keyDecisions: [
        { title: 'Isolated Local Caches', explanation: 'All configuration, npm cache, and temporary files are strictly directed to local USB paths.' },
        { title: 'Platform-Aware Launcher', explanation: 'Detects OS architecture and dynamically sets path variables before executing OpenCode binaries.' }
      ],
      challenges: [
        'Handling path variable resolution across Windows backslashes and Linux forward slashes on removable media.'
      ]
    }
  },
  {
    slug: 'smart-education-portal',
    name: 'smart-education-portal',
    tagline: 'Sethu: Academia-Industry Skill Mapping & Placement Platform (SIH 2026)',
    category: 'Full-Stack',
    maturity: 'Major',
    description: 'Academia-industry skill mapping, internship, mentorship, and placement portal customized for Audisankara University.',
    longDescription: 'Sethu is a full-stack web platform engineered for Smart India Hackathon 2026 (Problem Statement 26044). It connects students, faculty, recruiters, and placement officers through automated skill gap analysis, job matching, and institutional analytics.',
    problem: 'Traditional university placement systems suffer from fragmented skill verification, manual recruiter matching, and lack of real-time industry alignment analytics for students.',
    solution: 'Developed a responsive React + Node.js portal backed by PostgreSQL and Prisma ORM, providing role-based dashboards, skill intelligence mapping, and streamlined recruiter workflows.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Render'],
    keyFeatures: [
      'Role-based portals for Students, Recruiters, Faculty, and Placement Teams',
      'Automated skill gap analysis & industry opportunity matching',
      'Customized for Audisankara University (ASCET) institutional workflow',
      'Live cloud deployment on Render static & web services',
      'Interactive analytics dashboards for placement metrics'
    ],
    githubUrl: 'https://github.com/YogendraChukka01/smart-education-portal',
    liveUrl: 'https://smart-education-portal-qri6.onrender.com/',
    featured: true,
    metrics: [
      { label: 'Hackathon', value: 'SIH 2026' },
      { label: 'Target Inst.', value: 'Audisankara Univ.' },
      { label: 'Stack', value: 'React + Express' },
      { label: 'Status', value: 'Live Deployment' }
    ],
    caseStudy: {
      overview: 'Full-stack production web application built for SIH 2026 academia-industry collaboration.',
      problemStatement: 'Students lack clear visibility into industry skill requirements while recruiters struggle to evaluate institutional candidate pools accurately.',
      keyDecisions: [
        { title: 'Prisma + PostgreSQL Data Layer', explanation: 'Selected Prisma ORM for type-safe queries across relational placement and user schemas.' },
        { title: 'Vite + React SPA Architecture', explanation: 'Ensured fast client-side navigation and snappy dashboard interactions.' }
      ],
      challenges: [
        'Designing an intuitive role-switching architecture for multi-tier university permissions.'
      ]
    }
  },
  {
    slug: 'voice-assistant-python',
    name: 'voice-assistant-python',
    tagline: 'SREE: Historical Voice Assistant for Desktop Automation',
    category: 'Early / Experiment',
    maturity: 'Early',
    description: 'A voice-controlled desktop assistant created during 12th standard, featuring speech recognition, TTS, and desktop automation.',
    longDescription: 'Preserved historical project representing early exploration in computer automation and speech interfaces. Named SREE, it executed hands-free commands, browser navigation, and dictation in Python.',
    problem: 'Early exploration into hands-free computer control and speech interfaces.',
    solution: 'Engineered a lightweight Python script integrating SpeechRecognition, pyttsx3 text-to-speech, webbrowser, and PyAutoGUI automation.',
    technologies: ['Python 3.8+', 'SpeechRecognition', 'pyttsx3', 'PyAutoGUI', 'pywhatkit'],
    keyFeatures: [
      'Voice-activated web searching and system automation',
      'Text-to-speech voice responses and dictation mode',
      'Historical landmark in technical evolution toward AI engineering'
    ],
    githubUrl: 'https://github.com/YogendraChukka01/voice-assistant-python',
    featured: false,
    metrics: [
      { label: 'Milestone', value: '12th Std Project' },
      { label: 'Focus', value: 'Desktop Automation' },
      { label: 'Status', value: 'Historical Archive' }
    ],
    caseStudy: {
      overview: 'Historical educational project demonstrating early curiosity in software automation.',
      problemStatement: 'Understanding early voice input processing and rule-based system controls.',
      keyDecisions: [
        { title: 'Offline TTS & Speech Rec', explanation: 'Utilized pyttsx3 for fast local audio feedback without cloud latency.' }
      ],
      challenges: [
        'Handling ambient microphone noise and speech recognition threshold adjustments.'
      ]
    }
  }
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    title: 'Agentic AI',
    subtitle: 'Planning, Routing, Tool Use & Orchestration',
    description: 'Designing stateful, multi-step AI agents that break down complex goals, validate intermediate steps, and safely invoke external tools.',
    keywords: ['LangGraph', 'pydantic-ai', 'Multi-Agent', 'Tool Use', 'State Machines'],
    projects: ['AdaptiveAgent', 'Chief-AI'],
    icon: 'Bot'
  },
  {
    title: 'RAG Infrastructure',
    subtitle: 'Retrieval, Reranking, Grounding & Evaluation',
    description: 'Building grounded retrieval systems using hybrid search, dense vector embeddings, cross-encoder reranking, and automated LLM-as-judge evaluation.',
    keywords: ['pgvector', 'ChromaDB', 'Hybrid Search', 'Reranking', 'LLM-as-Judge'],
    projects: ['AdaptiveAgent'],
    icon: 'Database'
  },
  {
    title: 'AI Infrastructure',
    subtitle: 'Multi-Provider, Local Inference & Guardrails',
    description: 'Engineered resilient AI pipelines with zero-downtime provider fallbacks, local Ollama execution for privacy, and strict schema validation.',
    keywords: ['FastAPI', 'Ollama', 'Docker', 'Fallback Routing', 'Confidence Scoring'],
    projects: ['AdaptiveAgent', 'Chief-AI', 'Portable-Opencode'],
    icon: 'Cpu'
  },
  {
    title: 'Developer Tools',
    subtitle: 'Portable Environments, CLI & Workflows',
    description: 'Crafting developer-first infrastructure, portable runtimes, and multi-agent CLI systems that empower seamless developer workflows.',
    keywords: ['CLI Tools', 'OpenCode', 'USB Portable', 'Node.js Runtime', 'GitHub CI'],
    projects: ['Chief-AI', 'Portable-Opencode', 'smart-education-portal'],
    icon: 'Terminal'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 'EARLY BUILDS',
    stage: 'Automation Foundation',
    title: 'Voice Assistant (SREE)',
    project: 'voice-assistant-python',
    description: 'Explored hands-free desktop control, speech recognition, and Python system scripting during 12th standard.',
    impact: 'Established core interest in software automation and voice interfaces.',
    tech: ['Python', 'SpeechRec', 'pyttsx3']
  },
  {
    year: 'FULL-STACK SYSTEMS',
    stage: 'Product & Web Engineering',
    title: 'Smart Education Portal (Sethu)',
    project: 'smart-education-portal',
    description: 'Engineered academia-industry placement platform for Audisankara University for SIH 2026.',
    impact: 'Built complete full-stack web application with role-based workflows and cloud deployment.',
    tech: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Render']
  },
  {
    year: 'DEV INFRASTRUCTURE',
    stage: 'Developer Tooling',
    title: 'Portable-Opencode',
    project: 'Portable-Opencode',
    description: 'Created USB-first portable AI development environment working natively across Windows and Linux.',
    impact: 'Eliminated environment setup overhead for portable AI coding.',
    tech: ['Node.js Runtime', 'Shell/Batch', 'GitHub CI']
  },
  {
    year: 'MULTI-AGENT SYSTEMS',
    stage: 'Agentic Architecture',
    title: 'Chief-AI Framework',
    project: 'Chief-AI',
    description: 'Designed multi-agent operating system orchestrating 11 departments and 55 specialist sub-agents.',
    impact: 'Pioneered hierarchical agent goal decomposition compiled to native OpenCode agents.',
    tech: ['Python', 'pydantic-ai', 'OpenCode', 'SSE Streaming']
  },
  {
    year: 'AGENTIC RAG',
    stage: 'Production AI Systems',
    title: 'AdaptiveAgent Platform',
    project: 'AdaptiveAgent',
    description: 'Built 14-node LangGraph Agentic RAG platform with local-first inference and LLM-as-judge evaluation.',
    impact: 'Flagship engineering milestone with 94+ automated tests and multi-provider fallback.',
    tech: ['LangGraph', 'FastAPI', 'Next.js 15', 'pgvector', 'Ollama']
  }
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    category: 'AI & Agent Orchestration',
    items: [
      { name: 'LangGraph', role: 'Stateful Agent Pipeline', usedIn: ['AdaptiveAgent'], description: 'Directed execution graphs with loops and conditional routing' },
      { name: 'pydantic-ai', role: 'Agent Framework', usedIn: ['Chief-AI'], description: 'Type-safe structured AI outputs and agent definitions' },
      { name: 'Ollama', role: 'Local Inference Engine', usedIn: ['AdaptiveAgent'], description: 'Local-first execution for privacy-sensitive data' },
      { name: 'OpenCode Native', role: 'Sub-agent Execution', usedIn: ['Chief-AI', 'Portable-Opencode'], description: 'Native sub-agent compilation and tool invocation' }
    ]
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Python 3.10+', role: 'Primary Engineering Language', usedIn: ['AdaptiveAgent', 'Chief-AI', 'voice-assistant-python'], description: 'Primary language for AI pipelines, server logic, and agents' },
      { name: 'FastAPI', role: 'High-Performance Async API', usedIn: ['AdaptiveAgent', 'Chief-AI'], description: 'REST APIs, Server-Sent Events, and Pydantic validation' },
      { name: 'Node.js / Express', role: 'Web Server Runtime', usedIn: ['smart-education-portal'], description: 'Backend service APIs for placement portal' }
    ]
  },
  {
    category: 'Database & Vector Search',
    items: [
      { name: 'PostgreSQL & pgvector', role: 'Relational & Dense Search', usedIn: ['AdaptiveAgent', 'smart-education-portal'], description: 'Vector embeddings storage and transactional application data' },
      { name: 'ChromaDB', role: 'Vector Database', usedIn: ['AdaptiveAgent'], description: 'Local persistent vector store for similarity retrieval' },
      { name: 'Prisma ORM', role: 'Database Management', usedIn: ['smart-education-portal'], description: 'Type-safe database ORM and migrations' }
    ]
  },
  {
    category: 'Frontend & UI Design',
    items: [
      { name: 'Next.js 15', role: 'React App Architecture', usedIn: ['AdaptiveAgent', 'Yogendra-Portfolio'], description: 'App Router, static export, and fast SSR/SSG' },
      { name: 'TypeScript', role: 'Type Safety', usedIn: ['AdaptiveAgent', 'smart-education-portal', 'Yogendra-Portfolio'], description: 'End-to-end interface contracts and static verification' },
      { name: 'Tailwind CSS', role: 'Design System', usedIn: ['AdaptiveAgent', 'Chief-AI', 'smart-education-portal', 'Yogendra-Portfolio'], description: 'Utility-first modern layout and custom design tokens' },
      { name: 'Framer Motion', role: 'Micro-Interactions', usedIn: ['Yogendra-Portfolio'], description: 'Smooth entrance animations and layout transitions' }
    ]
  },
  {
    category: 'DevOps & Tooling',
    items: [
      { name: 'Docker', role: 'Containerization', usedIn: ['AdaptiveAgent'], description: 'Multi-stage builds and containerized deployments' },
      { name: 'GitHub Actions', role: 'CI/CD Automation', usedIn: ['AdaptiveAgent', 'Portable-Opencode'], description: 'Automated test pipelines, smoke tests, and lint checks' },
      { name: 'Pytest', role: 'Testing Suite', usedIn: ['AdaptiveAgent', 'Chief-AI'], description: 'Unit testing and multi-node pipeline assertions' }
    ]
  }
];
