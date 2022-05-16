import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  listDoctor=[
    { 'name':'Bác sĩ A','phone':'032724567','email':'phantrang011220@gmail.com','khoa':'Khoa A', 'img':'bv1.jpg' },
    { 'name':'Bác sĩ A','phone':'032724567','email':'phantrang011220@gmail.com','khoa':'Khoa A', 'img':'bv1.jpg' },
    { 'name':'Bác sĩ A','phone':'032724567','email':'phantrang011220@gmail.com','khoa':'Khoa A', 'img':'bv1.jpg' },
    { 'name':'Bác sĩ A','phone':'032724567','email':'phantrang011220@gmail.com','khoa':'Khoa A', 'img':'bv1.jpg' }

  ]
  listKhoa=[{'name':'KhoaA'},
  {'name':'KhoaA'},
  {'name':'KhoaA'},
  {'name':'KhoaA'},
]
  constructor(private headerService: HeaderserviceService) { }

  ngOnInit() {
    this.headerService.setActive('list-doctor');
  }

}
export interface  Doctor{
 name: string;
 address: string;
phone: string
email: string;
id:number;
username: string;
}
