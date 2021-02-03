import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '@shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  url = environment.baseApi + '/users';

  constructor(protected http: HttpClient) {
    super(http);
  }
}
