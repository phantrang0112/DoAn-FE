import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HeaderserviceService} from '../../service/userservice/headerservice.service';
import {AuthenticationService} from '../../service/authentication.service';
import {NotifyService} from '../../service/notify.service';
import {UserserviceService} from '../../service/userservice.service';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.css']
})
export class HeaderDoctorComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  formheader: FormGroup;

  constructor(private router: Router, private route: Router, private headerService: HeaderserviceService,
              private authentication: AuthenticationService, private notify: NotifyService,
              private userService: UserserviceService) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  logout() {
    this.notify.notifyCancel('Đăng xuất thành công!!!');
    this.authentication.logout();
  }
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/doctor/home', title: 'Trang chủ', icon: 'fa fa-home ', class: ''},
  {path: '/doctor/appointment-schedule', title: 'Lịch Hẹn Khám', icon: 'fa fa-calendar-plus-o text-blue', class: ''},
  {path: '/doctor/listAS', title: 'Danh sách lịch khám', icon: 'fa fa-list-alt text-orange', class: ''},
  {path: '/doctor/register-schedule', title: 'Đăng ký lịch trực', icon: 'fa fa-calendar text-yellow', class: ''},
  {path: '/doctor/ask-answer', title: 'Hỏi đáp với bệnh nhân', icon: 'fa fa-question-circle text-red', class: ''},
];

