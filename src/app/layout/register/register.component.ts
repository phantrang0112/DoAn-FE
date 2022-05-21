import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {UserAccount} from '../../models/user-account';
import {UserserviceService} from '../../service/userservice.service';
import ConfirmPasswordValidator from '../../shared/util/validation';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';
import {ValidatorsCharacters} from '../../shared/util/validators-characters';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new UserAccount();
  username: string = String(' ');
  password: string = String(' ');
  email: string = String(' ');
  phone: string = String(' ');
  confirmPassword: string = String(' ');
  submitted = false;
  loading = false;
  matcher = new MyErrorStateMatcher();

  constructor(private headerService: HeaderserviceService, private userService: UserserviceService,
              private formBuilder: FormBuilder, private alertService: AlertService,
              private router: Router) {
  }

  formRegister: FormGroup;

  ngOnInit() {
    this.headerService.setActive('register');
    this.formRegister = this.formBuilder.group({
        username: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.required, ValidatorsCharacters.Username]],
        password: ['', [Validators.minLength(6), Validators.maxLength(40), Validators.required, ValidatorsCharacters.Password]],
        confirmPassword: ['', [Validators.minLength(6), Validators.maxLength(40), Validators.required, ValidatorsCharacters.Password]],
        email: ['', [Validators.minLength(11), Validators.maxLength(40), Validators.required, ValidatorsCharacters.EmailAddress]],
        phone: ['', [Validators.minLength(10), Validators.maxLength(40), Validators.required, ValidatorsCharacters.PhoneFax]]
      },
      {
        validator: [ConfirmPasswordValidator.match('password', 'confirmPassword')],
      });
  }

  get f() {
    return this.formRegister.value;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formRegister.invalid) {
      return;
    }

    this.loading = true;
    this.user.username = this.formRegister.value.username;
    this.user.email = this.formRegister.value.email;
    this.user.password = this.formRegister.value.password;
    this.user.phone = this.formRegister.value.phone;
    this.user.accountID = 1;
    console.log(this.user);
    this.loading = true;
    this.userService.register(this.user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
