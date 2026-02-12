import React, { useEffect, useRef } from 'react';
import { useTerminal } from '../hooks/useTerminal';

interface TerminalModeProps {
  onExit: () => void;
}

export const TerminalMode: React.FC<TerminalModeProps> = ({ onExit }) => {
  const { history, input, setInput, executeCommand, navigateHistory } = useTerminal(onExit);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy-950 text-green-500 font-mono p-4 md:p-8 overflow-hidden flex flex-col grain-overlay"
      role="region"
      aria-label="Terminal Interface"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]" />

      <div
        className="flex-1 overflow-y-auto mb-4 relative z-10"
        onClick={() => inputRef.current?.focus()}
        aria-live="polite"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap mb-1 ${line.startsWith('user@grandline') ? 'text-gold-500' : 'text-green-400/90'
              }`}
          >
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center bg-navy-900/80 p-3 rounded border border-navy-700/60 focus-within:border-gold-500/50 transition-colors relative z-10 backdrop-blur-sm">
        <span className="mr-2 text-gold-500 select-none text-glow-gold">user@grandline:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none outline-none text-green-100 flex-1 caret-gold-500 p-0 m-0 w-full font-mono"
          autoFocus
          aria-label="Terminal Input"
          autoComplete="off"
          spellCheck="false"
        />
        <span className="animate-blink text-gold-500 ml-0.5">█</span>
      </div>

      <button
        onClick={onExit}
        className="absolute top-4 right-4 text-xs text-slate-500 hover:text-gold-500 border border-navy-700/60 hover:border-gold-500/40 px-3 py-1 rounded transition-all duration-300 z-10"
        aria-label="Exit Terminal Mode"
      >
        [ESC] GUI MODE
      </button>
    </div>
  );
};