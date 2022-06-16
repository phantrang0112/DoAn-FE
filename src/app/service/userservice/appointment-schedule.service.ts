import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {AuthenticationService} from '../../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {
  token = localStorage.getItem('curentUser');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.authentication.currentUserValue.token
      ,
      // 'Authorization': 'Bearer ' + this.token,
      // "Content-Type": "multipart/form-data",
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    }),
  };
  constructor(private httpclient: HttpClient, private authentication: AuthenticationService ) { }
  public getListAppoint(): Observable<any> {
    const url = `${environment.appointmentURL}all`;
    return this.httpclient.get<any>(url, this.httpOptions);// Nhớ import catchError
  }
  public postAppoint(data:any): Observable<any> {
    console.log('token ' + this.authentication.currentUserValue.token);
    const url = `${environment.appointmentURL}`;
    return this.httpclient.post<any>(url,data, this.httpOptions);// Nhớ import catchError
  }
}
