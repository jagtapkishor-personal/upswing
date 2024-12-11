import { Task } from './../../Model/task.model';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskState } from '../../Store/task/task.state';
import * as TaskActions from '../../Store/task/task.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { selectFilteredTasks } from 'src/app/Store/task/task.selector';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  statusFilter: string = 'All';
  priorityFilter: string = 'All';
  isFilterApplied: boolean = false;
  constructor(
    private store: Store<{ task: TaskState }>,
    private modalCtrl: ModalController
  ) {

  }

  ngOnInit() {

    console.log(this.tasks$);
  }


  // tasks$ = this.store.select((state) => {
  //   const { tasks, filter } = state.task;
  //   return tasks.filter((task) =>
  //     (filter.status === 'All' || task.status === filter.status) &&
  //     (filter.priority === 'All' || task.priority === filter.priority)
  //   );
  // });

  tasks$ = this.store.select(selectFilteredTasks);





  // onEditTask(task: Task) {
  //   this.store.dispatch(TaskActions.editTask({ task }));
  // }

  onDeleteTask(id: number) {
    this.store.dispatch(TaskActions.deleteTask({ id }));
  }

  onMarkCompleted(id: number) {
    this.store.dispatch(TaskActions.markTaskCompleted({ id }));
    this.clearFilter()
  }




  onFilter(status: string = 'All', priority: string = 'All') {
    console.log('Filter values:', status, priority);
    this.isFilterApplied = true;
    this.statusFilter = status;
    this.priorityFilter = priority;
    this.store.dispatch(TaskActions.filterTasks({ status, priority }));
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
      backdropDismiss: false,

    });
    await modal.present();
    this.clearFilter()


    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);

    if (role === 'confirm') {

    }
  }

  clearFilter() {

    this.statusFilter = 'All';
    this.priorityFilter = 'All';
    this.isFilterApplied = false;
    this.store.dispatch(TaskActions.resetFilters());

  }

}
