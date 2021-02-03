import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[];
  @Input()
  page: number;
  @Input()
  pageSize: number;
  @Input()
  collectionSize: number;
  @Output()
  onUserUpdate = new EventEmitter<User>();
  @Output()
  onUserDelete =  new EventEmitter<User>();



  constructor() { }

  ngOnInit(): void {
  }

  onDelete(selectedUser: User, index: number){
    this.users.splice(index, 1);
    this.onUserDelete.emit(selectedUser);
  }

  refreshData(): void {

  }



  onUserUpdateForm(user: User): void {
    this.onUserUpdate.emit(user);
  }



}
