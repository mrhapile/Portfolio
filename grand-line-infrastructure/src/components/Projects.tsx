import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/constants';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 bg-navy-900 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-white">Bounty Board</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4" />
          <p className="mt-4 text-slate-400 font-serif italic">completed contracts & open source contributions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-parchment/5 border-2 border-dashed border-navy-600 p-6 relative rounded hover:bg-parchment/10 hover:border-gold-500 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Paper Corner Effect */}
              <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-navy-900 border-r-navy-800 group-hover:border-r-gold-600 transition-colors shadow-lg" />

              <h3 className="text-xl font-bold text-gold-400 font-display mb-2 pr-4">{project.title}</h3>
              <p className="text-sm text-slate-300 font-serif mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-xs font-mono bg-navy-950 text-slate-400 px-2 py-1 rounded border border-navy-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-gold-500 font-mono tracking-wider">VIEW BOUNTY &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              layoutId={selectedProject.id}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-navy-900 w-full max-w-2xl border border-gold-500 rounded-sm shadow-[0_0_50px_rgba(212,160,23,0.15)] overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 border-b border-navy-800 flex justify-between items-start bg-navy-950">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">{selectedProject.title}</h3>
                    <span className="text-gold-500 font-mono text-xs tracking-widest mt-1 block">MISSION COMPLETE</span>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white">
                    <X />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto">
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-navy-800 p-4 rounded border border-navy-700">
                      <span className="block text-xs text-slate-400 mb-1 font-mono uppercase">Performance Metric</span>
                      <span className="text-xl font-bold text-green-400 font-mono">{selectedProject.metrics}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 font-serif text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-navy-700 pb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-navy-800 text-gold-400 font-mono text-sm rounded border border-navy-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-black font-bold py-3 px-6 rounded transition-colors">
                      <ExternalLink size={18} /> Live Deployment
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold py-3 px-6 rounded border border-navy-600 transition-colors">
                      <Github size={18} /> Source Code
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};