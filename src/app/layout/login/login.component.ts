import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {UserAccount} from '../../user/models/user-account';
import {UserserviceService} from '../../service/userservice.service';
import {AuthenticationService} from '../../service/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = String(' ');
  password: string = String(' ');
  submitted = false;

  constructor(private router: Router, private headerService: HeaderserviceService,
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
    this.router.navigate(['register']);
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
    this.authentication.login(this.username, this.password)
      .subscribe(
        data => {
          if (data!=null){
            this.router.navigate(['home']);
            console.log('login ok');
          } else {
            console.log('login loi');
          }
        },
        error => {
          console.log('login loi');
        }
      );
  }
}
