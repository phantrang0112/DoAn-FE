import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserAccount} from '../models/user-account';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserAccount>;
  public currentUser: Observable<UserAccount>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserAccount>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  existUser() {
    return localStorage.getItem('currentUser') != null ;
  }

  public get currentUserValue(): UserAccount {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log(username);
    return this.http.post<any>(`${environment.baseURL}/login`, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log(user);
          return user;
        }
        console.log(user);
        return null;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
