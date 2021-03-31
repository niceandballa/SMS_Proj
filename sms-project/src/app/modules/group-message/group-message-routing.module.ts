import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMessageComponent } from './group-message/group-message.component';

const routes: Routes = [
  {
    path: 'group-message',
    component: GroupMessageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupMessageRoutingModule { }
