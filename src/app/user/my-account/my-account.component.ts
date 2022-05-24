import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ValidatorsCharacters} from '../../shared/util/validators-characters';
import {Patient} from '../../models/patient';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  constructor(private authentication: AuthenticationService) {
  }
  addEmployeeForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    img: new FormControl(),
    // age: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), ValidatorsCharacters.PhoneFax]),
    // username: new FormControl('', [Validators.required]),
    // password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, ValidatorsCharacters.EmailPattern])
  });
  id = 0;
  img;
  title = 'Add Employee';
  display = false;
  message;
  patient = new Patient();

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.addEmployeeForm.controls.img.setValue('bv1.jpg');

  }

  changeImg() {

    const id = this.id;
    // tslint:disable-next-line:triple-equals
    if (id == 0) {
      // this.notify.notifiError('Error',"Unverified account");
    } else {
      // this.router.navigate(['change-img', this.id]);
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
