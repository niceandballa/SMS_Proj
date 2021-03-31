import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupMessageRoutingModule } from './group-message-routing.module';
import { GroupMessageComponent } from './group-message/group-message.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [GroupMessageComponent],
  imports: [
    CommonModule,
    GroupMessageRoutingModule,
    SharedModule
  ]
})
export class GroupMessageModule { }
