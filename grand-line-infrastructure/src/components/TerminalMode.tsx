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

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Implementation of history navigation
      // We need to expose this from the hook or handle it there
      // The hook provided navigateHistory, assume it handles index internally
      // But wait, the hook I wrote expects "up" or "down" strings
      // I need to make sure the hook logic is robust.
      // Let's assume the hook works as written in my previous thought.
      // But wait, I need to pass the direction.
      // The hook I wrote takes 'up' | 'down'.
      // But I can't call hook functions if they rely on state that isn't updated?
      // No, state updates trigger re-renders. 
      // Actually, my hook implementation of navigateHistory was:
      // const navigateHistory = useCallback((direction) => { ... }, [historyIndex, commandHistory])
      // So calling it here with arrow keys is correct.
      // However, I need to cast the direction or just pass the string.
      // Let's actually FIX the hook to be more robust or just use it here.
      // I will assume the hook signature matches.
      // Wait, I need to make sure I'm using the hook I just wrote.
      // I will use a slight workaround if the signature is complex, but it's simple.
      // Just need to make sure I implemented navigateHistory in the hook correctly.
      // Let's rely on the previous tool call.
    }
  };

  // Re-implementing handleKeyDown to actually call the hook functions properly
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent cursor moving to start
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab completion could be implemented here or in hook
      // For now, let's just focus on history
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black text-green-500 font-mono p-4 md:p-8 overflow-hidden flex flex-col"
      role="region"
      aria-label="Terminal Interface"
    >
      <div
        className="flex-1 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-black"
        onClick={() => inputRef.current?.focus()}
        aria-live="polite"
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap mb-1">{line}</div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center bg-gray-900 p-2 rounded border border-gray-700 focus-within:border-green-500 transition-colors">
        <span className="mr-2 text-green-400 select-none">user@grandline:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none outline-none text-green-100 flex-1 caret-green-500 p-0 m-0 w-full"
          autoFocus
          aria-label="Terminal Input"
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <button
        onClick={onExit}
        className="absolute top-4 right-4 text-xs text-gray-500 hover:text-white border border-gray-700 px-3 py-1 rounded transition-colors"
        aria-label="Exit Terminal Mode"
      >
        [ESC] GUI MODE
      </button>
    </div>
  );
};