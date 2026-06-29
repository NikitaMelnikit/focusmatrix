import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Quadrant, TaskTag } from '../types';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, tag: TaskTag, quadrant: Quadrant) => void;
  defaultQuadrant?: Quadrant | null;
}

const tags: TaskTag[] = ['Work', 'Trading', 'Coding'];
const quadrants: Quadrant[] = ['Q1', 'Q2', 'Q3', 'Q4'];

export function AddTaskModal({ isOpen, onClose, onAdd, defaultQuadrant }: AddTaskModalProps) {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState<TaskTag>('Work');
  const [quadrant, setQuadrant] = useState<Quadrant>('Q1');

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setTag('Work');
      if (defaultQuadrant) {
        setQuadrant(defaultQuadrant);
      }
    }
  }, [isOpen, defaultQuadrant]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), tag, quadrant);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-md bg-[var(--bg-color)] border border-[var(--card-border)] rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)]">
            <h3 className="font-semibold text-lg">Add New Task</h3>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-[var(--text-color)] transition-colors rounded hover:bg-[var(--card-bg)]"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                Task Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full px-3 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                Tag
              </label>
              <div className="flex gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTag(t)}
                    className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                      tag === t
                        ? 'bg-[var(--accent)] text-slate-900 border-[var(--accent)]'
                        : 'bg-[var(--card-bg)] text-slate-500 border-[var(--card-border)] hover:border-slate-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                Quadrant
              </label>
              <div className="grid grid-cols-4 gap-2">
                {quadrants.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuadrant(q)}
                    className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                      quadrant === q
                        ? 'bg-[var(--accent)] text-slate-900 border-[var(--accent)]'
                        : 'bg-[var(--card-bg)] text-slate-500 border-[var(--card-border)] hover:border-slate-400'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[var(--text-color)] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!title.trim()}
                className="px-4 py-2 text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-slate-900 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Task
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
