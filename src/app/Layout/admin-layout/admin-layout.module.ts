import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { ListPageComponent } from 'src/app/Views/list-page/list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateTaskComponent } from 'src/app/Views/create-task/create-task.component';


@NgModule({
  declarations: [
    ListPageComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule, ReactiveFormsModule,
    IonicModule
  ]
})
export class AdminLayoutModule { }
