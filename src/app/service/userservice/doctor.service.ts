import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  listDoctor;
  listDept;
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
  public getListDoctor(): Observable<any> {
    const url = `${environment.doctorURL}all`;
    return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  }
  public getListDoctorByDept(deptid,date): Observable<any> {
    const url = `${environment.doctorURL}`+deptid+'/'+date;
    return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  }
}
