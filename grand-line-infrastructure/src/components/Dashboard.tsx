import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, Database, CloudLightning, Terminal } from 'lucide-react';

const LOGS = [
  '[INFO] Initializing handshake with peer 172.16.0.4...',
  '[WARN] High latency detected on shard-04 (142ms)',
  '[SUCCESS] Block 834102 verified. Hash: 0000...a3f2',
  '[INFO] Autoscaling group trigger: Scaling up +2 nodes',
  '[DEBUG] GC sweeping... freed 402MB',
  '[INFO] LND Channel opened: Capacity 5,000,000 sats',
  '[SEC] Unauthorized access attempt blocked from IP 203.0.113.4',
  '[INFO] CI Pipeline #9921 completed in 42s',
  '[INFO] Rotating TLS certificates...',
  '[SUCCESS] System health check passed.',
];

export const Dashboard: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-15), LOGS[index % LOGS.length]]);
      index++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section className="py-24 bg-deep-ocean text-white relative border-t border-navy-800/50 grain-overlay">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-display text-white text-glow-gold">Infrastructure Command</h2>
            <p className="text-slate-500 font-mono text-sm mt-1">Real-time system telemetry</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse status-pulse" />
            <span className="font-mono text-green-500 text-xs tracking-wider">OPERATIONAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Metric Cards */}
          <div className="space-y-4">
            <MetricCard
              label="Uptime (YTD)"
              value="99.998%"
              icon={<Activity size={20} className="text-gold-500" />}
              sub="0m 12s downtime detected"
            />
            <MetricCard
              label="Active Nodes"
              value="42"
              icon={<Server size={20} className="text-blue-400" />}
              sub="Auto-scaling active"
            />
            <MetricCard
              label="Lightning Capacity"
              value="2.4 BTC"
              icon={<CloudLightning size={20} className="text-yellow-400" />}
              sub="15 active channels"
            />
            <MetricCard
              label="Ledger Size"
              value="582 GB"
              icon={<Database size={20} className="text-purple-400" />}
              sub="+140 MB / day"
            />
          </div>

          {/* Terminal / Log Stream */}
          <div className="lg:col-span-2 bg-navy-950 rounded-lg border border-navy-700/80 p-1 font-mono text-xs shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-full min-h-[300px]">
            <div className="bg-navy-800/80 px-4 py-2.5 flex items-center justify-between border-b border-navy-700/60">
              <span className="text-slate-400 flex items-center gap-2">
                <Terminal size={14} /> sys.log
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>
            </div>

            {/* Log Container */}
            <div
              ref={containerRef}
              className="p-4 flex-1 overflow-y-auto flex flex-col inset-shadow-navy"
            >
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-1.5 ${log.includes('WARN')
                      ? 'text-yellow-500'
                      : log.includes('SEC') || log.includes('ERR')
                        ? 'text-alert-500'
                        : log.includes('SUCCESS')
                          ? 'text-green-400'
                          : 'text-slate-400'
                    }`}
                >
                  <span className="text-slate-600 mr-2">{new Date().toLocaleTimeString()}</span>
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard: React.FC<{
  label: string;
  value: string;
  icon: React.ReactNode;
  sub: string;
}> = ({ label, value, icon, sub }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-navy-800/50 border border-navy-700 p-5 rounded hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.08)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">{label}</span>
        {icon}
      </div>
      <div className="text-2xl font-bold font-mono text-gold-400 metric-glow">
        {value}
      </div>
      <div className="text-xs text-slate-500 mt-1 font-mono">{sub}</div>
    </motion.div>
  );
};