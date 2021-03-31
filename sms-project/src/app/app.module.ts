import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupViewModule } from './modules/group-view/group-view.module';
import { GroupViewComponent } from './modules/group-view/group-view/group-view.component';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './modules/login/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    GroupViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
