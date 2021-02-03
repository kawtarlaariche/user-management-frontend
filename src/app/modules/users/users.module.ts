import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserManagmentComponent } from './pages/user-managment/user-managment.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDataComponent } from './forms/user-data/user-data.component';



@NgModule({
  declarations: [
    UserManagmentComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserFormComponent,
    UserUpdateComponent,
    UserDataComponent
    ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class UsersModule { }
