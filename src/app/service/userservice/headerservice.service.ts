import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderserviceService {
  header=[
    {'title':"Trang chủ",'active':'active','name':'home'},
    {'title':"Giới thiệu",'active':'','name':'about'},
    {'title':"Danh mục bác sĩ",'active':'', 'name':'list-doctor'},
    {'title':"Lịch khám",'active':'','name':'appointment-schedule'},
    {'title':"Liên hệ",'active':'','name':'contact'},
    {'title':"Hỏi đáp với bác sĩ",'active':'','name':'ask-answer'},
    {'title':"Thông tin cá nhân",'active':'','name':'my-account'},
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
