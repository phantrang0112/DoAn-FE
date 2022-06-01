import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpclient: HttpClient,) { }
  public getPayr(): Observable<any> {
    const url = `${environment.paymentURL}`;
    return this.httpclient.post<any>(url,5);// Nhớ import catchError
  }


}
