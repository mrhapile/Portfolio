import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Anchor, GitCommit } from 'lucide-react';

const principles = [
  {
    icon: <Anchor className="w-8 h-8 text-gold-500" />,
    title: "Determinism",
    desc: "Infrastructure should be immutable. If you can't reproduce it from code, it doesn't exist."
  },
  {
    icon: <GitCommit className="w-8 h-8 text-gold-500" />,
    title: "Idempotency",
    desc: "Operations must be safe to repeat. The state of the system is a mathematical certainty, not a guess."
  },
  {
    icon: <Activity className="w-8 h-8 text-gold-500" />,
    title: "Observability",
    desc: "You cannot steer a ship in the fog without a compass. Logs, metrics, and traces are our eyes."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold-500" />,
    title: "Security First",
    desc: "Trust nothing. Verify everything. Zero trust architecture is the only safe harbor."
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display text-white mb-4">The Captain's Code</h2>
          <p className="text-slate-400 font-serif italic max-w-2xl mx-auto">
            Governing principles for high-stakes production environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy-800/40 border border-navy-700 p-8 rounded-lg hover:border-gold-500/30 transition-colors group"
            >
              <div className="mb-4 p-3 bg-navy-900 w-fit rounded-lg shadow-lg group-hover:shadow-gold-500/10 transition-shadow">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2 font-display">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-mono text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};