import { createAction, props } from '@ngrx/store';
import { Task } from '../../Model/task.model';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const editTask = createAction('[Task] Edit Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
export const markTaskCompleted = createAction('[Task] Mark Task Completed', props<{ id: number }>());
export const filterTasks = createAction('[Task] Filter Tasks', props<{ status: string; priority: string }>());
