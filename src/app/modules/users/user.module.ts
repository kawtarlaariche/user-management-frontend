import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './pages/user-managment/user-managment.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';




@NgModule({
  declarations: [
    UserManagmentComponent,
    UserCreateComponent, 
    UserDetailsComponent, 
    UserListComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
