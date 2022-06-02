import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Doctor} from '../../models/doctor';
import {UserAccount} from '../../models/user-account';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private currentDoctorSubject: BehaviorSubject<Doctor>;
  public currentDoctor: Observable<Doctor>;
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
  // constructor(private httpclient: HttpClient) {
  //   this.currentDoctorSubject = new BehaviorSubject<Doctor>(JSON.parse(localStorage.getItem('currentDoctor')));
  //   this.currentDoctor = this.currentDoctorSubject.asObservable();
  // }

  // public get currentDoctorValue(): Doctor {
  //   return this.currentDoctorSubject.value;
  // }
  // public getListDoctor(): Observable<any> {
  //   const url = `${environment.doctorURL}all`;
  //   return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  // }
  // public getListDoctorByDept(deptid, date): Observable<any> {
  //   const url = `${environment.doctorURL}` + deptid + '/' + date;
  //   return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  // }

  // public getDoctorById(id: number) {
  //   return this.httpclient.get<Doctor>(`${environment.doctorURL}${id}`, this.httpOptions).pipe(
  //     map(doctor => {
  //       if (doctor != null) {
  //         localStorage.setItem('currentDoctor', JSON.stringify(doctor));
  //         this.currentDoctorSubject.next(doctor);
  //         console.log('doctor = ' + doctor);
  //         return doctor;
  //       }
  //       return null;
  //     })
  //   );
  // }
}
