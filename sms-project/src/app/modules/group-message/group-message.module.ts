import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupMessageRoutingModule } from './group-message-routing.module';
import { GroupMessageComponent } from './group-message/group-message.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CreateNewuserComponent } from './group-message/create-newuser/create-newuser.component';
import { CreateEndpointComponent } from './group-message/create-endpoint/create-endpoint.component';
import { UserMessageComponent } from './group-message/user-message/user-message.component';


@NgModule({
  declarations: [GroupMessageComponent, CreateNewuserComponent, CreateEndpointComponent, UserMessageComponent],
  imports: [
    CommonModule,
    GroupMessageRoutingModule,
    SharedModule
  ]
})
export class GroupMessageModule { }
