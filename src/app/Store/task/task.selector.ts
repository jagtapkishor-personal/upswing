import { createSelector } from '@ngrx/store';

export const selectTaskState = (state: any) => state.task;

export const selectFilteredTasks = createSelector(
  selectTaskState,
  (state: any) => {
    console.log(state);

    const { tasks, filter } = state;
    return tasks.filter(
      (task: any) =>
        (filter.status === 'All' || task.status === filter.status) &&
        (filter.priority === 'All' || task.priority === filter.priority)
    );
  }
);
