import { useState } from 'react';
import { Header } from './components/Header';
import { FocusMode } from './components/FocusMode';
import { TaskBoard } from './components/TaskBoard';
import { DecisionMatrix } from './components/DecisionMatrix';
import { AddTaskModal } from './components/AddTaskModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Task, Quadrant, TaskTag } from './types';

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('focusmatrix_tasks', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuadrant, setSelectedQuadrant] = useState<Quadrant | null>(null);

  const handleAddTask = (title: string, tag: TaskTag, quadrant: Quadrant) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      tag,
      quadrant,
      done: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleQuadrantClick = (quadrant: Quadrant) => {
    setSelectedQuadrant(quadrant);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setSelectedQuadrant(null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--accent)] selection:text-slate-900">
      <Header onAddTask={openModal} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[calc(100vh-8rem)]">
          {/* Column 1: Focus Mode */}
          <div className="h-[600px] lg:h-auto">
            <FocusMode />
          </div>

          {/* Column 2: Task Board */}
          <div className="h-[600px] lg:h-auto">
            <TaskBoard
              tasks={tasks}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>

          {/* Column 3: Decision Matrix */}
          <div className="h-[600px] lg:h-auto">
            <DecisionMatrix onQuadrantClick={handleQuadrantClick} />
          </div>
        </div>
      </main>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTask}
        defaultQuadrant={selectedQuadrant}
      />
    </div>
  );
}
