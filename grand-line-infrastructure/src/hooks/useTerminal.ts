import { useState, useCallback } from 'react';
import { MILESTONES, PROJECTS } from '../data/constants';

interface TerminalState {
    history: string[];
    commandHistory: string[];
    historyIndex: number;
    input: string;
}

export const useTerminal = (onExit: () => void) => {
    const [history, setHistory] = useState<string[]>([
        "Grand Line OS [Version 1.0.4]",
        "(c) Portfolio Corporation. All rights reserved.",
        "",
        "Welcome, User. Type 'help' for a list of commands."
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [input, setInput] = useState('');

    const executeCommand = useCallback((cmd: string) => {
        const trimmed = cmd.trim();
        if (!trimmed) {
            setHistory(prev => [...prev, `user@grandline:~$`]);
            return;
        }

        const lowerCmd = trimmed.toLowerCase();
        let response: string[] = [];

        // Add to command history
        setCommandHistory(prev => [trimmed, ...prev]);
        setHistoryIndex(-1);

        switch (lowerCmd) {
            case 'help':
                response = [
                    "Available commands:",
                    "  about      - Display user philosophy",
                    "  projects   - List all projects",
                    "  roadmap    - Show career milestones",
                    "  contact    - Display contact info",
                    "  clear      - Clear terminal",
                    "  exit       - Return to GUI mode"
                ];
                break;
            case 'about':
                response = [
                    "Subject: Captain of Production",
                    "Focus: Determinism, Observability, Bitcoin",
                    "Status: Ready for new challenges."
                ];
                break;
            case 'projects':
                response = PROJECTS.map(p => `* ${p.title} [${p.metrics}]`);
                break;
            case 'roadmap':
                response = MILESTONES.map(m => `[${m.year}] ${m.title}`);
                break;
            case 'contact':
                response = ["Email: captain@grandline.dev", "GitHub: @captain_dev"];
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
                onExit();
                return;
            default:
                response = [`Command not found: ${trimmed}`];
        }

        setHistory(prev => [...prev, `user@grandline:~$ ${trimmed}`, ...response]);
        setInput('');
    }, [onExit]);

    const navigateHistory = useCallback((direction: 'up' | 'down') => {
        if (commandHistory.length === 0) return;

        let newIndex = historyIndex;
        if (direction === 'up') {
            newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        } else {
            newIndex = Math.max(historyIndex - 1, -1);
        }

        setHistoryIndex(newIndex);

        if (newIndex === -1) {
            setInput('');
        } else {
            setInput(commandHistory[newIndex]);
        }
    }, [commandHistory, historyIndex]);

    return {
        history,
        input,
        setInput,
        executeCommand,
        navigateHistory
    };
};
