import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

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
    { path: '/admin/home', title: 'Trang chủ',  icon: 'fa fa-home ', class: '' },
    { path: '/admin/list-appointment', title: 'Danh sách lịch hẹn khám',  icon:'fa fa-calendar-plus-o text-blue', class: '' },
    { path: '/admin/list-of-appointment', title: 'Danh sách lịch khám',  icon:'fa fa-calendar-plus-o text-blue', class: '' },
    { path: '/admin/department', title: 'Danh sách Khoa',  icon:'fa fa-list-alt text-orange', class: '' },
    { path: '/user-profile', title: 'Danh sách bệnh nhân ',  icon:'fa fa-calendar text-yellow', class: '' },
    { path: '/tables', title: 'Danh sách thuốc',  icon:'fa fa-question-circle text-red', class: '' },
    { path: '/tables', title: 'Danh sách bệnh',  icon:'fa fa-question-circle text-red', class: '' },
    { path: '/tables', title: 'Danh sách bài viết',  icon:'fa fa-question-circle text-red', class: '' },
    { path: '/tables', title: 'Danh sách lịch trực',  icon:'fa fa-question-circle text-red', class: '' },
    { path: '/tables', title: 'Thông tin cá nhân',  icon:'fa fa-question-circle text-red', class: '' },

  ];
