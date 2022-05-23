import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {UserserviceService} from '../../service/userservice.service';
import {AuthenticationService} from '../../service/authentication.service';
import {first} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = String(' ');
  password: string = String(' ');
  submitted = false;
  loading = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private headerService: HeaderserviceService, private alertService: AlertService,
              private formBuilder: FormBuilder, private authentication: AuthenticationService) {
  }

  formLogin: FormGroup;

  ngOnInit(): void {
    this.headerService.setActive('login');
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.minLength(5), Validators.maxLength(40), Validators.required]],
      password: ['', [Validators.minLength(6), Validators.maxLength(40), Validators.required]]
    });
  }

  register() {
    this.router.navigate(['user/register']);
  }

  get f() {
    return this.formLogin.controls;
  }

  login() {
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }
    this.username = this.formLogin.value.username;
    this.password = this.formLogin.value.password;
    this.loading = true;
    this.authentication.login(this.username, this.password)
      .subscribe(
        data => {
          if (data != null) {
            this.router.navigate(['home']);
          } else {
            this.loading = false;
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
