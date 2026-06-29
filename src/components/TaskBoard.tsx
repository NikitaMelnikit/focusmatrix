import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { Task } from '../types';

interface TaskBoardProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const tagColors = {
  Work: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Trading: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  Coding: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

export function TaskBoard({ tasks, onToggleTask, onDeleteTask }: TaskBoardProps) {
  return (
    <div className="flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Task Board
        </h2>
        <span className="text-xs font-mono px-2 py-1 bg-[var(--bg-color)] rounded border border-[var(--card-border)] text-slate-500">
          {tasks.filter((t) => !t.done).length} ACTIVE
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-3">
        <AnimatePresence>
          {tasks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-slate-500 text-sm text-center"
            >
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-dashed border-[var(--card-border)] flex items-center justify-center">
                <CheckCircle2 size={24} className="opacity-20" />
              </div>
              No tasks yet.<br />Add a task to get started.
            </motion.div>
          ) : (
            tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                whileHover={{ scale: 1.01 }}
                className={`group flex flex-col gap-3 p-4 rounded-lg border transition-all ${
                  task.done
                    ? 'bg-[var(--bg-color)] border-[var(--card-border)] opacity-60'
                    : 'bg-[var(--bg-color)] border-[var(--card-border)] hover:border-[var(--accent)]/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="mt-0.5 text-slate-400 hover:text-[var(--accent)] transition-colors shrink-0"
                  >
                    {task.done ? (
                      <CheckCircle2 size={20} className="text-[var(--accent)]" />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm font-medium ${
                      task.done ? 'line-through text-slate-500' : ''
                    }`}
                  >
                    {task.title}
                  </span>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-400 transition-all"
                    title="Delete task"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 pl-8">
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                      tagColors[task.tag]
                    }`}
                  >
                    {task.tag}
                  </span>
                  {task.quadrant && (
                    <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded border border-[var(--card-border)] bg-[var(--card-bg)]">
                      {task.quadrant}
                    </span>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
