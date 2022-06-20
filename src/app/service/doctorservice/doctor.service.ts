import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + this.token,
      // "Content-Type": "multipart/form-data",
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    }),
  };
  constructor() { }
}
