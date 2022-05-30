import {Component, OnInit} from '@angular/core';
import * as internal from 'assert';
import { DeptService } from 'src/app/service/userservice/dept.service';
import { DoctorService } from 'src/app/service/userservice/doctor.service';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  listDoctor;
  //   {name: 'Bác sĩ A', phone: '032724567', email: 'phantrang011220@gmail.com', khoa: 'Khoa A', img: 'bv1.jpg'},
  //   {name: 'Bác sĩ A', phone: '032724567', email: 'phantrang011220@gmail.com', khoa: 'Khoa A', img: 'bv1.jpg'},
  //   {name: 'Bác sĩ A', phone: '032724567', email: 'phantrang011220@gmail.com', khoa: 'Khoa A', img: 'bv1.jpg'},
  //   {name: 'Bác sĩ A', phone: '032724567', email: 'phantrang011220@gmail.com', khoa: 'Khoa A', img: 'bv1.jpg'}

  listKhoa:dept;
  // \= [{name: 'KhoaA'},
  //   {name: 'KhoaA'},
  //   {name: 'KhoaA'},
  //   {name: 'KhoaA'},
  // ];

  constructor(private headerService: HeaderserviceService, private doctorService: DoctorService,private deptService: DeptService) {
    doctorService.getListDoctor().subscribe((data)=>{
      this.listDoctor=data;
      console.log(this.listDoctor);
    });
    deptService.getListDept().subscribe((data)=>{
      this.listKhoa=data;
      console.log(this.listKhoa);
    });


  }

  ngOnInit() {
    this.headerService.setActive('list-doctor');
  }

}

export interface Doctor {
  name: string;
  address: string;
  phone: string;
  email: string;
  id: number;
  username: string;
}
export interface dept {
  id: number;
  name: string;
}
