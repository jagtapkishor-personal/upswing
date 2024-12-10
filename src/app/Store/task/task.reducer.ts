import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../task/task.action';
import { initialTaskState } from './task.state';
import { Task } from '../../Model/task.model';

export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TaskActions.editTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)),
  })),
  on(TaskActions.deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((t) => t.id !== id),
  })),
  on(TaskActions.markTaskCompleted, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((t: any) =>
      t.id === id ? { ...t, status: 'Completed' } : t
    ),
  })),
  // on(TaskActions.filterTasks, (state, { status, priority }) => ({
  //   ...state,
  //   filter: { status: 'Pending', priority },
  // }))
);
