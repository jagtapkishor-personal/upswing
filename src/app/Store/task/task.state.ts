import { Task } from '../../Model/task.model';

export interface TaskState {
  tasks: Task[];
  filter: {
    status: 'All' | 'Pending' | 'Completed';
    priority: 'All' | 'Low' | 'Medium' | 'High';
  };
}

export const initialTaskState: TaskState = {
  tasks: [],
  filter: {
    status: 'All',
    priority: 'All',
  },
};
