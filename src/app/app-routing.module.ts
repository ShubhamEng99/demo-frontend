import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'signin' ,component:SigninComponent},
  {path:'tasks',component:TasksComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
