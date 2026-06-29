export type TaskTag = 'Work' | 'Trading' | 'Coding';

export type Quadrant = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export interface Task {
  id: string;
  title: string;
  tag: TaskTag;
  quadrant: Quadrant;
  done: boolean;
  createdAt: number;
}
