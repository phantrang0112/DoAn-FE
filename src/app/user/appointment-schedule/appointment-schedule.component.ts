import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit {

  constructor(private headerService: HeaderserviceService,private route: Router) { }
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }
  clickItemAppointment(stt, trangThai,id){
    let date= "01-12-2000";
    let hour=Math.floor((stt*2)/60)+7;
    let minute=stt*2%60
    Swal.fire({
      title: '<p>Số thứ tự của bạn là:</p><strong>'+stt+'</strong>',
      icon: trangThai,
      html:
        'Thời gian khám dự kiến <b>'+hour+' giờ '+minute+' phút '+'</b>, ' +
        '<p>Bạn vui lòng có mặt trước bệnh viện<b> trước 10 phút</b> để hoàn tất thủ tục đăng ký</p> ',
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText:'Ok',
      cancelButtonAriaLabel: 'OK'
    })
  }
  registrationSchedule(){
    this.route.navigate(['user/registration-schedule'])
  }
}
