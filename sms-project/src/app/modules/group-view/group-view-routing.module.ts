import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupComponent } from './group-view/create-group/create-group.component';
import { GroupViewComponent } from './group-view/group-view.component';

const routes: Routes = [
  {
    path: 'group-view',
    component: GroupViewComponent,
  },
  {
    path: 'group-view/new-group',
    component: CreateGroupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupViewRoutingModule { }
