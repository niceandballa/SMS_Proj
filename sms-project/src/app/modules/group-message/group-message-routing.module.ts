import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEndpointComponent } from './group-message/create-endpoint/create-endpoint.component';
import { CreateNewuserComponent } from './group-message/create-newuser/create-newuser.component';
import { GroupMessageComponent } from './group-message/group-message.component';
import { UserMessageComponent } from './group-message/user-message/user-message.component';

const routes: Routes = [
  {
    path: 'group-message',
    component: GroupMessageComponent
  },
  {
    path: 'user-message/:userID',
    component: UserMessageComponent
  },
  {
    path: 'group-message/new-endpoint',
    component: CreateEndpointComponent
  },
  {
    path: 'group-message/new-user',
    component: CreateNewuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupMessageRoutingModule { }
