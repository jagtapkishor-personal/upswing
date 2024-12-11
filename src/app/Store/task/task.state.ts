import { Task } from '../../Model/task.model';

export interface TaskState {
  tasks: Task[];
  filter: {
    status: any;
    priority: any;
  };
}

export const initialTaskState: TaskState = {
  tasks: [],
  filter: {
    status: 'All',
    priority: 'All',
  },
};
