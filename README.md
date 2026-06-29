# 🎯 FocusMatrix

> A high-performance productivity workspace combining the Pomodoro technique, Task Management, and the Eisenhower Decision Matrix.

FocusMatrix is a beautifully crafted, local-first productivity web application designed to help you organize your tasks, prioritize effectively, and maintain deep focus. Inspired by the sleek aesthetics of financial terminals, it features a minimal, high-contrast UI with smooth layout animations.

<img width="1903" height="869" alt="image" src="https://github.com/user-attachments/assets/f4961f6e-48b6-4e64-86d8-759f171dbfdb" />

<img width="1902" height="867" alt="image" src="https://github.com/user-attachments/assets/16e5bb0e-0578-4064-a347-b6ed1ec22253" />



## ✨ Features

- **⏱️ Focus Mode (Pomodoro Timer)**: A precision countdown timer with a dynamic SVG progress ring to keep you in the zone. Includes standard 25-minute focus blocks and 5-minute short breaks.
- **📋 Task Board**: A robust task management list with categorization tags (`Work`, `Trading`, `Coding`). Tasks are persisted locally, complete with smooth Framer Motion layout animations when adding, completing, or removing items.
- **🔲 Decision Matrix (Eisenhower)**: Visually prioritize your workload using the Eisenhower Matrix. Click any quadrant to instantly add a task categorized to that specific priority level (Do First, Schedule, Delegate, Eliminate).
- **🌗 Theme Toggle**: Built-in Dark/Light mode support. The default dark mode features a deep slate background (`#0f172a`) with vibrant teal (`#2dd4bf`) accents.
- **💾 Local-First Persistence**: All tasks and theme preferences are automatically saved to your browser's local storage. Fast, reliable, and privacy-respecting (your data never leaves your device).
- **📱 Fully Responsive**: A fluid 3-column desktop layout that elegantly collapses into a scrollable, unified view for mobile devices.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/focusmatrix.git
   cd focusmatrix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 🏗️ Project Structure

```text
src/
├── components/          # UI components
│   ├── AddTaskModal.tsx # Modal for task creation
│   ├── DecisionMatrix.tsx # Eisenhower matrix grid
│   ├── FocusMode.tsx    # Pomodoro timer logic and UI
│   ├── Header.tsx       # Navigation and theme toggle
│   └── TaskBoard.tsx    # Task list rendering
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.ts # State persistence logic
│   └── useTimer.ts      # Timer state management
├── App.tsx              # Main application layout
├── index.css            # Tailwind & CSS Variables (Theming)
├── main.tsx             # Application entry point
└── types.ts             # Global TypeScript definitions
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
