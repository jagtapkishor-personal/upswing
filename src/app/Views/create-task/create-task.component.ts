import { Task } from './../../Model/task.model';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../Store/task/task.action';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  private fb = inject(FormBuilder)
  constructor(
    private modalCtrl: ModalController,
    private store: Store<{ task: TaskState }>
  ) {
    this.taskForm = this.fb.group({
      title: ['task a', [Validators.required]],
      description: ['desc b', [Validators.required]],
      status: [''],
      priority: ['', [Validators.required]],
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('taskCreated', 'confirm');
  }

  ngOnInit() { }


  createTask() {

    console.log(this.taskForm.value);

    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      const newTask: Task = {
        id: Math.random(), // Example ID generator
        title: formValue.title,
        description: formValue.description,
        status: 'Pending',
        priority: formValue.priority,
        // dueDate: new Date(formValue.dueDate),
        dueDate: new Date(),

      };
      this.onAddTask(newTask);

    }
    else {
      alert('Fill the form')
    }
  }
  onAddTask(task: Task) {
    this.store.dispatch(TaskActions.addTask({ task }));
    return this.modalCtrl.dismiss('taskCreated', 'confirm');
  }
}
