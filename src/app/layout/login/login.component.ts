import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {UserserviceService} from '../../service/userservice.service';
import {AuthenticationService} from '../../service/authentication.service';
import {first} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material';
import {AlertService} from '../../service/alert.service';
import {NotifyService} from '../../service/notify.service';
import {UserAccount} from '../../models/user-account';
import {Patient} from '../../models/patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserAccount();
  patient = new Patient();
  submitted = false;
  loading = false;
  id: number;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private headerService: HeaderserviceService, private alertService: AlertService,
              private formBuilder: FormBuilder, private authentication: AuthenticationService, private notify: NotifyService,
              private userService: UserserviceService) {
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

  async login() {
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }
    this.user.username = this.formLogin.value.username;
    this.user.password = this.formLogin.value.password;
    this.loading = true;
    // tslint:disable-next-line:no-unused-expression
    await this.authentication.login(this.user.username, this.user.password)
      .toPromise().then(
        data => {
          if (data != null) {
            this.notify.notifySuccessToggerMessage('Login success!!!');
            this.router.navigate(['home']);
            this.user = data;
            console.log('this User = ' + this.user);
          } else {
            this.loading = false;
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    await this.userService.getPatientById(this.user.id)
      .toPromise().then(
        patientData => {
          if (patientData != null) {
            this.patient = patientData;
            console.log('patient = ' + this.patient);
          }
        }, error => {
          console.log('error = ' + error);
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
