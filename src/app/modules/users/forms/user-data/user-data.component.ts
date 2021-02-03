import { Component, OnInit, Input } from '@angular/core';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input()
  user: User

  constructor() { }

  ngOnInit(): void {
  }

}
