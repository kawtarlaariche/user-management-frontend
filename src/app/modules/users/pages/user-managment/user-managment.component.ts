import { UserService } from '@core/http/user.service';
import { User } from '@shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

  user: User;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll()
      .subscribe(
        users => { this.users = users },
        err => {
        }
      );

  }

  onUserCreate(user: User): void{
    this.userService.create(user)
      .subscribe(
        user => this.users.push(user),
        err => {}
      )
  }

  onUserUpdate(user: User): void{
    console.log(user);
    this.userService.update(user.id, user)
      .subscribe(
        user => {},
        err => {}
      )
  }

  onUserDelete(user: User): void{
    this.userService.delete(user.id)
      .subscribe(
        res => {},
        err => {}
      )
  }

}
