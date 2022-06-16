import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ValidatorsCharacters} from '../../shared/util/validators-characters';
import {Patient} from '../../models/patient';
import {AuthenticationService} from '../../service/authentication.service';
import {UserserviceService} from '../../service/userservice.service';
import {NotifyService} from '../../service/notify.service';
import {DatePipe} from '@angular/common';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  constructor(private authentication: AuthenticationService, private userService: UserserviceService,
              private notify: NotifyService, private headerService: HeaderserviceService) {
  }

  addEmployeeForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    img: new FormControl(),
    birthday: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, ValidatorsCharacters.PhoneFax]),
    email: new FormControl('', [Validators.required, Validators.email, ValidatorsCharacters.EmailPattern])
  });
  id = 0;
  img;
  title = 'Add Employee';
  display = false;
  message;
  patient = new Patient();
  obj = new Patient();
  matcher = new MyErrorStateMatcher();
  date = new Date();
  ngOnInit() {
    this.headerService.setActive('my-account');
    this.addEmployeeForm.controls.img.setValue('bv1.jpg');
    this.patient = this.userService.currentPatientValue;
    console.log(convert(this.patient.birthday));
    this.patient.birthday = convert(this.patient.birthday);
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

  changeInfo() {
    this.obj = this.addEmployeeForm.value;
    this.obj.birthday = convert(this.addEmployeeForm.value.birthday);
    console.log('birthday in form = ' + this.obj.birthday);
    this.obj.id = this.patient.id;
    this.obj.accountid = this.patient.accountid;
    console.log(this.obj);
    this.userService.updatePatient(this.obj).subscribe(data => {
      if (data != null) {
        this.notify.notifySuccessToggerMessage('Change Info Success');
        console.log('obj = ' + this.obj);
      }
    }, error => {
      this.notify.notifiError('Change Info Error!!!', 'Please Re-Enter');
      // console.log('obj = ' + this.obj);
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
function convert(str) {
  // tslint:disable-next-line:prefer-const one-variable-per-declaration
  const date = new Date(str),
    month = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [date.getFullYear(), month, day].join('-');
}

