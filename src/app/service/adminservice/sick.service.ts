import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SickService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + this.token,
      // "Content-Type": "multipart/form-data",
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) {
  }

  public getListSick(): Observable<any> {
    const url = `${environment.sickURL}get-all-sick`;
    return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  }

  public getListTypeSick(): Observable<any> {
    const url = `${environment.typeSickURL}get-all-typeSick`;
    return this.httpclient.get<any>(url, this.httpOptions); // Nhớ import catchError
  }
}
