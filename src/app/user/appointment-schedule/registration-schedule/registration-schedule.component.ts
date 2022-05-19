import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-registration-schedule',
  templateUrl: './registration-schedule.component.html',
  styleUrls: ['./registration-schedule.component.css']
})
export class RegistrationScheduleComponent implements OnInit {
  changeColors = "";
  changeColors1 = "change-color";
  click = false;
  class;
  button;
  online= false;
  disableSelect = new FormControl();
  formDangKy= new FormGroup({
    phuongThuc: new FormControl(null,Validators.required),
    ngayKham: new FormControl(null,Validators.required),
    khoa: new FormControl(null,Validators.required),
    bacSi: new FormControl(null,Validators.required),
    gioKham: new FormControl(null,Validators.required),
    gia: new FormControl(),
  })
  constructor(private headerService: HeaderserviceService,private route: Router) { }

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }
  changeColor(click) {
    this.button = click;
    this.click = !this.click;
    if (this.click) {
      this.changeColors = "change-color";
      this.formDangKy.controls['phuongThuc'].setValue('kham online');
      this.online=true;
      this.changeColors1 = ""
    } else {
      this.changeColors = "";
      this.formDangKy.controls['phuongThuc'].setValue('Kham truc tiep')
      this.changeColors1 = "change-color";
      this.online=false;
    }
    this.formDangKy.controls['gioKham'].setValue(300000);
    // this.formDangKy.controls['gia'].setValue(300000);
    console.log( this.formDangKy.value);

    // console.log(random);
  }
  clickDate() {
     this.class="date-registration-click";

  }
  createTime(){

  }
  payment(){
    this.route.navigate(['payment']);
  }

}
