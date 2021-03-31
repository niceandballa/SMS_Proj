import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupViewComponent } from './group-view/group-view.component';

const routes: Routes = [
  {
    path: 'group-view',
    component: GroupViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupViewRoutingModule { }
