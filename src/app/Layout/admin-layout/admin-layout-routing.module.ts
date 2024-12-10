import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from 'src/app/Views/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  },
  {
    path: 'list',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
