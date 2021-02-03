import { environment } from '@env';
import { catchError, map } from 'rxjs/operators';
import { User } from '@shared/models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl: string = environment.baseApi + '/auth'

  constructor(private http: HttpClient) { }

  signIn(user: User) {
    return this.http.post(this.apiUrl + '/signIn',user)
      .pipe(
        map(res => {

          let id = res['id'];
          let token = res['token'];
          let username = res['username'];
          //let expTime = res['EXPIRY_TIME'];

          localStorage.setItem('token', token);
          //localStorage.setItem('expTime', expTime);

        }),
        catchError(this.errorHandler)
      )
  }

  singnUp(user: User) {
    return this.http.post(this.apiUrl + '/signUp', user)
      .pipe(
        map(res => {}),
        catchError(this.errorHandler)
      );
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
