import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {UserserviceService} from '../../service/userservice.service';
import {AuthenticationService} from '../../service/authentication.service';
import {first, map} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material';
import {AlertService} from '../../service/alert.service';
import {NotifyService} from '../../service/notify.service';
import {UserAccount} from '../../models/user-account';
import {Patient} from '../../models/patient';
import {DoctorService} from '../../service/userservice/doctor.service';
import {Doctor} from '../../models/doctor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserAccount();
  patient = new Patient();
  doctor = new Doctor();
  submitted = false;
  loading = false;
  id: number;
  error = '';
  matcher = new MyErrorStateMatcher();
  path = '';
  role = '';

  constructor(private router: Router, private headerService: HeaderserviceService, private alertService: AlertService,
              private formBuilder: FormBuilder, private authentication: AuthenticationService, private notify: NotifyService,
              private userService: UserserviceService, private route: ActivatedRoute, private doctorService: DoctorService) {
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

  forgetPass() {
    this.router.navigate(['user/forgot-password']);
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
            this.notify.notifySuccessToggerMessage('Đăng nhập thành công!!!');
            this.path = this.authentication.currentUserValue.role;
            this.router.navigate([this.path + '/home']);
            this.user = data;
            console.log(data);
            // window.location.href = 'https://www.google.com';
            console.log('this User = ' + this.user);
          } else {
            this.notify.notifiError('Đăng nhập thất bại', 'Nhập lại');
            this.loading = false;
          }
        },
        error => {
          this.alertService.error('Đăng nhập thất lại!');
          this.loading = false;
        }
      );
    this.role = this.user.role;
    if (this.role === 'user') {
      this.getDataUser();
    } else if (this.role === 'doctor') {
      console.log('if doctor = ' + this.role + ' id= ' + this.user.id);
      this.getDataDoctor();
    } else {
      this.getDataAdmin();
    }
  }

  getDataUser() {
    this.userService.getPatientById(this.user.id)
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

  getDataDoctor() {
    this.doctorService.getDoctorById(this.user.id).toPromise().then((data => {
      if (data != null) {
        this.doctor = data;
        console.log('doctor = ' + data);
      } else {
        this.alertService.error(null);
      }
    }));
  }

  getDataAdmin() {
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
