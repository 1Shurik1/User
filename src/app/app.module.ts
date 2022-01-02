import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { IdComponent } from './id/id.component';
import { RouterModule, Routes } from '@angular/router';





const  appRoutes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: IdComponent},
  {path: '', redirectTo: '/user', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
