import { Play, Pause, RotateCcw } from 'lucide-react';
import { useTimer } from '../hooks/useTimer';

export function FocusMode() {
  const { isRunning, toggle, reset, formatTime, progress } = useTimer(25);

  return (
    <div className="flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Focus Mode
        </h2>
        <div className="text-xs font-mono px-2 py-1 bg-[var(--bg-color)] rounded border border-[var(--card-border)] text-slate-500">
          POMODORO
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Timer Display */}
        <div className="relative flex flex-col items-center justify-center w-64 h-64 mb-8">
          {/* Progress Ring Background */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              className="stroke-[var(--card-border)]"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress Ring Foreground */}
            <circle
              cx="128"
              cy="128"
              r="120"
              className="stroke-[var(--accent)] transition-all duration-1000 ease-linear"
              strokeWidth="8"
              fill="none"
              strokeDasharray="753.98"
              strokeDashoffset={753.98 - (753.98 * progress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <span className="font-mono text-6xl font-medium tracking-tighter">
            {formatTime()}
          </span>
          <span className="text-sm text-slate-500 mt-2 uppercase tracking-widest">
            {isRunning ? 'Focusing' : 'Paused'}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => reset(25)}
            className="p-3 rounded-full hover:bg-[var(--card-border)] transition-colors text-slate-500 hover:text-[var(--text-color)]"
            title="Reset to 25m"
          >
            <RotateCcw size={24} />
          </button>
          <button
            onClick={toggle}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-slate-900 shadow-lg shadow-[var(--accent)]/20 transition-all hover:scale-105 active:scale-95"
          >
            {isRunning ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
          </button>
          <button
            onClick={() => reset(5)}
            className="p-3 rounded-full hover:bg-[var(--card-border)] transition-colors text-slate-500 hover:text-[var(--text-color)]"
            title="Short Break (5m)"
          >
            <span className="font-mono text-sm font-bold">5m</span>
          </button>
        </div>
      </div>
    </div>
  );
}
