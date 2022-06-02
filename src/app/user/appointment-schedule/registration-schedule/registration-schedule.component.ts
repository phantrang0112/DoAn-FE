import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { DeptService } from 'src/app/service/userservice/dept.service';
import { DoctorService } from 'src/app/service/userservice/doctor.service';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';
import { PaymentService } from 'src/app/service/userservice/paymentservice.service';
import Swal from 'sweetalert2';

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
  quydoi:number;
  listDept;
  listDoctor;
  deptId;
  disableSelect = new FormControl();
  formDangKy= new FormGroup({
    phuongThuc: new FormControl(null,Validators.required),
    ngayKham: new FormControl(null,Validators.required),
    khoa: new FormControl(null,Validators.required),
    bacSi: new FormControl(null,Validators.required),
    gioKham: new FormControl(null,Validators.required),
    gia: new FormControl(),
  })
  constructor(private headerService: HeaderserviceService,private route: Router,private paymentService:PaymentService,private deptService:DeptService,private doctorService:DoctorService) {
    deptService.getListDept().subscribe(data=>{
      this.listDept=data;
    })

  }

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }
  changeColor(click) {
    this.button = click;
    this.click = !this.click;
    console.log(click);
    if (this.click) {
      this.changeColors = "change-color";
      this.formDangKy.controls['phuongThuc'].setValue('khám online');
      this.online=true;
      this.changeColors1 = ""
    } else {
      this.changeColors = "";
      this.online=false;
      this.formDangKy.controls['phuongThuc'].setValue('Khám trực tiếp')
      this.changeColors1 = "change-color";

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
    let price:number=+this.formDangKy.controls.gia.value;
    this.quydoi= +(price/23000).toFixed(2);
    console.log(price);
    Swal.fire({
      title: 'Xác nhận thanh toán',
      text:'Giá tiền là'+price+'VNĐ  ( Được quy đổi sang là:'+this.quydoi+' $)',
      icon:'warning',
      confirmButtonText: 'Xác nhận',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.paymentService.getPayr(this.quydoi).subscribe(data=>{
          console.log(data);
          window.location.href =data.linkPayment;
        })
      }
    })

    //  window.location.href = 'https://www.google.com';
    // this.route.navigate(['user/payment']);
  }
  choseDept(deptid){
    let date=this.formDangKy.controls.ngayKham.value;
    console.log(date+""+deptid);
    this.doctorService.getListDoctorByDept(deptid,date).subscribe(data=>{
      console.log(data)
      this.listDoctor=data;
    })
  }
  doctorChange(doctorid){

  }

}
export interface scheduleRegistration{
  id:number;
  date:string;
  typeClinic: string;
  dept: string;
  doctor:string;
  time:string;
  price:number;
}
