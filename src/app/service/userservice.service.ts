import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/patient';
import {UserAccount} from '../models/user-account';

const baseUrl = 'http://localhost:8080/webyte/account';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }
  get(id: any): Observable<Patient> {
    // @ts-ignore
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}?title=${title}`);
  }

  register(obj: any[]) {
    console.log('registerUser= ' + obj);
    return this.http.post(`${baseUrl}/${'signupUser'}`, obj);
  }
}
