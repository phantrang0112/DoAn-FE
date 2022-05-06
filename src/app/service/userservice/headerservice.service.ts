import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderserviceService {
  header=[
    {'title':"Trang chủ",'active':'active','name':'home'},
    {'title':"Giới thiệu",'active':'','name':'about'},
    {'title':"Danh mục bác sĩ",'active':'', 'name':'listDoctor'},
    {'title':"Lịch khám",'active':'','name':'medicalExaminationSchedule'},
    {'title':"Liên hệ",'active':'','name':'contact'},
    {'title':"Danh mục bệnh",'active':'','name':'listDisease'},
    {'title':"Thông tin cá nhân",'active':'','name':'account'},
    {'title':"Đăng nhập",'active':'','name':'login'},
]
  constructor() { }
  getHeader(){
    return this.header;
  }
  setActive(name){
    for(let i=0; i<this.header.length;i++){ 
      if(this.header[i].name==name){
        this.header[i].active='active';
      }
      else{
        this.header[i].active='';
      }
    }
  }
  classActive(){

   }
}
