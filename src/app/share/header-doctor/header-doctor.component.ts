import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.css']
})
export class HeaderDoctorComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
 formheader:FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

}
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/doctor/home', title: 'Trang chủ',  icon: 'fa fa-home ', class: '' },
    { path: '/doctor/appointment-schedule', title: 'Lịch Hẹn Khám',  icon:'fa fa-calendar-plus-o text-blue', class: '' },
    { path: '/doctor/listAS', title: 'Danh sách lịch khám',  icon:'fa fa-list-alt text-orange', class: '' },
    { path: '/user-profile', title: 'Đăng ký lịch trực',  icon:'fa fa-calendar text-yellow', class: '' },
    { path: '/tables', title: 'Hỏi đáp với bệnh nhân',  icon:'fa fa-question-circle text-red', class: '' },
];

