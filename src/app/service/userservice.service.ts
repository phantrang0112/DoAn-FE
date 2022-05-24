import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/patient';
import {UserAccount} from '../models/user-account';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  register(obj: any[]) {
    return this.http.post(`${environment.baseURL}/${'signupUser'}`, obj);
  }
}
