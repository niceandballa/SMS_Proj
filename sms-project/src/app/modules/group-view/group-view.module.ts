import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupViewRoutingModule } from './group-view-routing.module';
import { GroupViewComponent } from './group-view/group-view.component';


@NgModule({
  declarations: [GroupViewComponent],
  imports: [
    CommonModule,
    GroupViewRoutingModule
  ]
})
export class GroupViewModule { }
