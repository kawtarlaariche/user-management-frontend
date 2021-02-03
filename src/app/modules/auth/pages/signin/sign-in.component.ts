import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/services/authentication.service';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  error:string;

  constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

  ngOnInit(): void {
  }

  signIn(user: User){
    this.authService.signIn(user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users'])
      },
      err => {
        console.log(err)
      }
    )

  }

}
