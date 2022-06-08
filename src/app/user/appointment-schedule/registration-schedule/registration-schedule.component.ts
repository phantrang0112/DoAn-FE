import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DeptService} from 'src/app/service/userservice/dept.service';
import {DoctorService} from 'src/app/service/userservice/doctor.service';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import {PaymentService} from 'src/app/service/userservice/paymentservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-schedule',
  templateUrl: './registration-schedule.component.html',
  styleUrls: ['./registration-schedule.component.css']
})
export class RegistrationScheduleComponent implements OnInit {
  time = [
    { time: '07:00', class: ''},
    { time: '07:30', class: ''},
    { time: '08:00', class: ''},
    { time: '08:30', class: ''},
    { time: '09:00', class: ''},
    { time: '09:30', class: ''},
    { time: '10:00', class: ''},
    { time: '10:30', class: ''},
    { time: '11:00', class: ''},
    { time: '11:30', class: ''},
    { time: '12:00', class: ''},
    { time: '12:30', class: ''},
    { time: '13:00', class: ''},
    { time: '13:30', class: ''},

    { time: '14:00', class: ''},
    { time: '14:30', class: ''},
    { time: '15:00', class: ''},
    { time: '15:30', class: ''},
    { time: '16:00', class: ''},
    { time: '16:30', class: ''},
    { time: '17:00', class: ''},
    { time: '17:30', class: ''},
    { time: '18:30', class: ''},
    { time: '19:00', class: ''},
    { time: '19:30', class: ''},
    { time: '20:00', class: ''},
    { time: '20:30', class: ''},]
  changeColors = '';
  changeColors1='';
  click = false;
  class;
  button;
  online = false;
  quydoi: number;
  listDept;
  listDoctor;
  colorTime;
  deptId;
  disableSelect = new FormControl();
  formDangKy = new FormGroup({
    phuongThuc: new FormControl(null, Validators.required),
    ngayKham: new FormControl(null, Validators.required),
    khoa: new FormControl(null, Validators.required),
    bacSi: new FormControl(null, Validators.required),
    gioKham: new FormControl(null, Validators.required),
    gia: new FormControl(),
  });

  // tslint:disable-next-line:max-line-length
  constructor(private headerService: HeaderserviceService, private route: Router, private paymentService: PaymentService, private deptService: DeptService, private doctorService: DoctorService) {
    deptService.getListDept().subscribe(data => {
      this.listDept = data;
    });

  }

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }

  changeColor(click) {
    this.button = click;
    this.click = !this.click;
    console.log(click);
    if (this.click) {
      this.changeColors1 = 'change-color';
      this.formDangKy.controls.phuongThuc.setValue('khám online');
      this.online = true;
      this.changeColors = '';
    } else {
      this.changeColors1 = '';
      this.online = false;
      this.formDangKy.controls.phuongThuc.setValue('Khám trực tiếp');
      this.changeColors = 'change-color';

    }
    this.formDangKy.controls.gioKham.setValue(300000);
    // this.formDangKy.controls['gia'].setValue(300000);
    console.log(this.formDangKy.value);

    // console.log(random);
  }

  clickDate() {
    this.class = 'date-registration-click';

  }

  createTime() {

  }

  payment() {

    Swal.fire({
      title: 'Xác nhận thanh toán',
      text: 'Giá tiền là' + this.formDangKy.controls.gia.value + 'VNĐ  ( Được quy đổi sang là:' + this.quydoi + ' $)',
      icon: 'warning',
      confirmButtonText: 'Xác nhận',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.paymentService.getPayr(this.quydoi).subscribe(data => {
          console.log(data);
          window.location.href = data.linkPayment;
        });
      }
    });

    //  window.location.href = 'https://www.google.com';
    // this.route.navigate(['user/payment']);
  }

  choseDept(deptid) {
    const date = this.formDangKy.controls.ngayKham.value;
    console.log(date + '' + deptid);
    this.doctorService.getListDoctorByDept(deptid, date).subscribe(data => {
      console.log(data);
      this.listDoctor = data;
    });
  }

  doctorChange(doctorid) {
    if (this.online) {
      this.doctorService.getPriceDoctor(doctorid).subscribe(data => {
        this.formDangKy.controls.gia.setValue(data.price);
        this.quydoi = +(data.price / 23000).toFixed(2);
      });


    }

  }

  clickTime(name) {
    console.log(name);
    for(let item of this.time){
      if(item.time===name){
        item.class='btn-color';
      }
      else{
        item.class = '';
      }
    }


  }

  generateTime() {
    const hh = 7;
    const mm = 0;
    const time = null;
    for (let i = 7; i < 21; i++) {

    }
  }
}

// tslint:disable-next-line:class-name
export interface scheduleRegistration {
  id: number;
  date: string;
  typeClinic: string;
  dept: string;
  doctor: string;
  time: string;
  price: number;
}
