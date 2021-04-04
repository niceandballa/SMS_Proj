import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupViewRoutingModule } from './group-view-routing.module';
import { GroupViewComponent } from './group-view/group-view.component';
import { CreateGroupComponent } from './group-view/create-group/create-group.component';


@NgModule({
  declarations: [GroupViewComponent, CreateGroupComponent],
  imports: [
    CommonModule,
    GroupViewRoutingModule
  ]
})
export class GroupViewModule { }
