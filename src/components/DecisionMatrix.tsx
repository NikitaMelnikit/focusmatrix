import { motion } from 'motion/react';
import { Quadrant } from '../types';
import { Plus } from 'lucide-react';

interface DecisionMatrixProps {
  onQuadrantClick: (quadrant: Quadrant) => void;
}

const quadrants: { id: Quadrant; title: string; desc: string; color: string }[] = [
  {
    id: 'Q1',
    title: 'Do First',
    desc: 'Urgent & Important',
    color: 'hover:border-red-400/50 hover:bg-red-400/5',
  },
  {
    id: 'Q2',
    title: 'Schedule',
    desc: 'Not Urgent & Important',
    color: 'hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5',
  },
  {
    id: 'Q3',
    title: 'Delegate',
    desc: 'Urgent & Not Important',
    color: 'hover:border-orange-400/50 hover:bg-orange-400/5',
  },
  {
    id: 'Q4',
    title: 'Eliminate',
    desc: 'Not Urgent & Not Important',
    color: 'hover:border-slate-400/50 hover:bg-slate-400/5',
  },
];

export function DecisionMatrix({ onQuadrantClick }: DecisionMatrixProps) {
  return (
    <div className="flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Decision Matrix
        </h2>
        <span className="text-xs font-mono px-2 py-1 bg-[var(--bg-color)] rounded border border-[var(--card-border)] text-slate-500">
          EISENHOWER
        </span>
      </div>

      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3">
        {quadrants.map((q) => (
          <motion.button
            key={q.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onQuadrantClick(q.id)}
            className={`group relative flex flex-col items-start justify-between p-4 rounded-xl border-2 border-dashed border-[var(--card-border)] bg-[var(--bg-color)] transition-colors text-left overflow-hidden ${q.color}`}
          >
            <div>
              <div className="text-xs font-mono text-slate-500 mb-1">{q.id}</div>
              <div className="font-semibold">{q.title}</div>
              <div className="text-xs text-slate-500 mt-1">{q.desc}</div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-[var(--card-bg)] text-slate-400 group-hover:text-current">
              <Plus size={16} />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
