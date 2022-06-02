import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppointmentScheduleService } from 'src/app/service/userservice/appointment-schedule.service';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';
import Swal from 'sweetalert2';
import {DoctorService} from '../../service/userservice/doctor.service';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit {
  listAppointmentSchedule;
  constructor(private headerService: HeaderserviceService, private route: Router,
              private appoinentService: AppointmentScheduleService, private doctorService: DoctorService) {
    this.appoinentService.getListAppoint(this.doctorService.currentDoctorValue.id).subscribe((data) => {
      this.listAppointmentSchedule = data;
      console.log('AppointmentSchedule = ' + data);
    }, error => {
      console.log('error ' + error);
    });
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
    this.appoinentService.getListAppoint(this.doctorService.currentDoctorValue.id).subscribe((data) => {
      this.listAppointmentSchedule = data;
      console.log('AppointmentSchedule = ' + data);
    }, error => {
      console.log('error ' + error);
    });
  }

  clickItemAppointment(stt, trangThai, id) {
    const date = '01-12-2000';
    const hour = Math.floor((stt * 2) / 60) + 7;
    const minute = stt * 2 % 60;
    Swal.fire({
      title: '<p>Số thứ tự của bạn là:</p><strong>' + stt + '</strong>',
      icon: trangThai,
      html:
        'Thời gian khám dự kiến <b>' + hour + ' giờ ' + minute + ' phút ' + '</b>, ' +
        '<p>Bạn vui lòng có mặt trước bệnh viện<b> trước 10 phút</b> để hoàn tất thủ tục đăng ký</p> ',
      showCloseButton: true,
      focusConfirm: true,
      confirmButtonText: 'Ok',
      cancelButtonAriaLabel: 'OK'
    });
  }
  registrationSchedule() {
    this.route.navigate(['user/registration-schedule']);


  }
}
