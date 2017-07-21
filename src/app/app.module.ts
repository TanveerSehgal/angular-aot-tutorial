import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      UserComponent,
      ReposComponent,
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
  ],
  providers: [],
  bootstrap: [
      AppComponent,
  ]
})
export class AppModule { }
