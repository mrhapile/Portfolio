import React from 'react';
import { Milestone, Project } from '../types';

export const MILESTONES: Milestone[] = [
  {
    id: 'linux',
    title: 'Linux Foundations',
    year: 'Start',
    description: ['Kernel tuning', 'Shell scripting mastery', 'System hardening'],
    x: 20,
    y: 10,
  },
  {
    id: 'docker',
    title: 'Containerization',
    year: 'Cycle 1',
    description: ['Docker optimizaton', 'Multi-stage builds', 'Registry management'],
    x: 80,
    y: 30,
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines',
    year: 'Cycle 2',
    description: ['GitHub Actions', 'Automated testing', 'Zero-downtime deploys'],
    x: 30,
    y: 50,
  },
  {
    id: 'bitcoin',
    title: 'Bitcoin Infrastructure',
    year: 'Cycle 3',
    description: ['Node deployment', 'Lightning Network', 'P2P Protocol'],
    x: 70,
    y: 75,
  },
  {
    id: 'reliability',
    title: 'Chaos & Reliability',
    year: 'Current',
    description: ['SRE practices', 'Observability', 'Incident response'],
    x: 40,
    y: 90,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Lightning Node Auto-Scaler',
    description: 'An automated Kubernetes operator for managing Lightning Network node liquidity and scaling based on channel demand.',
    tech: ['Go', 'Kubernetes', 'LND', 'Prometheus'],
    metrics: '99.99% Uptime',
  },
  {
    id: 'p2',
    title: 'Immutable Ledger Auditor',
    description: 'A sidecar service that verifies deterministic build reproducibility for Bitcoin Core release binaries.',
    tech: ['Rust', 'Docker', 'Shell'],
    metrics: 'Verifies < 2min',
  },
  {
    id: 'p3',
    title: 'Oceanic CI',
    description: 'A custom CI/CD runner optimized for high-performance cryptographic operations and compilation caching.',
    tech: ['Python', 'AWS Lambda', 'Terraform'],
    metrics: '40% Faster Builds',
  },
];