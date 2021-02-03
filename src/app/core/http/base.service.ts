import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  protected url = '';

  constructor(protected http: HttpClient) { }

  findAll(): Observable<T[]> {
      return this.http.get(this.url)
                      .pipe(
                        map(res => res as T[]),
                        catchError(this.errorHandeler));
  }

  findById(id:number): Observable<T>{
    let params = new HttpParams().set("id", id.toString());

    return this.http.get(this.url, {params: params})
                      .pipe(
                        map(res => res as T),
                        catchError(this.errorHandeler));
  }

  create(model:T): Observable<T>{
   return this.http.post(this.url, model)
                    .pipe(
                      map(res => res as T),
                      catchError(this.errorHandeler));
  }

  update(id:number, data:T): Observable<any>{
    let params = new HttpParams().set("id", id.toString());

    return this.http.put(this.url, { params: params }, data)
                      .pipe(
                        map(res => {}),
                        catchError(this.errorHandeler));
  }

  delete(id:number): Observable<any>{
    let params = new HttpParams().set("id", id.toString());

    return this.http.delete(this.url,{ params: params })
                      .pipe(
                        map(res => {}),
                        catchError(this.errorHandeler));
  }

  errorHandeler(error: HttpErrorResponse) {
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
