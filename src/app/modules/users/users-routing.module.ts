import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagmentComponent } from './pages/user-managment/user-managment.component';



const routes: Routes = [
  { path: '', redirectTo: 'user-management', pathMatch: 'prefix'},
  {
    path: 'user-management',
    component: UserManagmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{ }
