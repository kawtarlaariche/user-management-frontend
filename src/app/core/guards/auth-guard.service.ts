import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

canActivate(route: ActivatedRouteSnapshot) {
    let token = localStorage.getItem('token')
    //let expTime = new Date(localStorage.getItem('expTime'));
    let currentDte = new Date();
    //expTime >= currentDte
    if (token != undefined) {
        console.log('you have been logged')
        return true
    }

        console.log('you have to Sign Up')
        this.router.navigate(['auth/signin']);

}
}
