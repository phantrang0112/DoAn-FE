import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderserviceService {
  header = [
    {title: 'Trang chủ', active: 'active', name: 'home'},
    {title: 'Giới thiệu', active: '', name: 'about'},
    {title: 'Danh mục bác sĩ', active: '', name: 'list-doctor'},
    {title: 'Lịch khám', active: '', name: 'appointment-schedule'},
    {title: 'Liên hệ', active: '', name: 'contact'},
    {title: 'Hỏi đáp với bác sĩ', active: '', name: 'ask-answer'},
    {title: 'Thông tin cá nhân', active: '', name: 'my-account'},
    {title: 'Đăng nhập', active: '', name: 'login'},
];
thisHome = true;
  constructor() { }
  getHeader() {
    return this.header;
  }
  setActive(name) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.header.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.header[i].name == name) {
        this.header[i].active = 'active';
      } else {
        this.header[i].active = '';
      }
    }
  }
  classActive() {

   }
   getThisHome() {
     return this.thisHome;
   }
   setThisHome(flag) {
      this.thisHome = flag;
   }
}
