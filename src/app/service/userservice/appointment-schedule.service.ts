import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + this.token,
      // "Content-Type": "multipart/form-data",
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    }),
  };
  constructor(private httpclient: HttpClient) { }
  public getListAppoint(doctorId: number): Observable<any> {
    const url = `${environment.appointmentURL}allByDoctor/${doctorId}`;
    return this.httpclient.get<any>(url, this.httpOptions).pipe(
      map(appointmentURL => {
        if (appointmentURL != null) {
          console.log('appointmentURL = ' + appointmentURL);
          return appointmentURL;
        }
        return null;
      })); // Nhớ import catchError
  }
}
