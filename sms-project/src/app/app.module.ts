import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupMessageModule } from './modules/group-message/group-message.module';
import { GroupViewModule } from './modules/group-view/group-view.module';
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './shared/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    GroupViewModule,
    GroupMessageModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
