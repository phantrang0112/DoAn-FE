import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { time } from 'console';
import { NotifyService } from 'src/app/service/notify.service';
import { AppointmentScheduleService } from 'src/app/service/userservice/appointment-schedule.service';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit {
  listAppointmentScheduleOrigin;
  listAppointmentSchedule;
  constructor(private headerService: HeaderserviceService, private route: Router, private appoinentService: AppointmentScheduleService, private notify: NotifyService) {
    appoinentService.getListAppoint().subscribe((data) => {
      this.listAppointmentScheduleOrigin = data;
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin;
      console.log(data);
    })

  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }

  clickItemAppointment(stt, trangthai, time, typeclinic, id) {
    console.log(id);
    if (typeclinic === 'Offline' && trangthai === 'Đã đăng ký') {
      this.notify.notifyNotLink('<p>Số thứ tự của bạn là:</p><strong>' + stt + '</strong>', 'Thời gian khám dự kiến <b>' + time + '</b>, ' +
        '<p>Bạn vui lòng có mặt trước bệnh viện<b> trước 10 phút </b> để hoàn tất thủ tục đăng ký</p> ', 'info')
    } else if (typeclinic === 'Online' && trangthai === 'Đã đăng ký') {
      this.notify.notifyNotLink('<p>Ngày khám của bạn là:</p><strong>' + stt + '</strong>', 'Thời gian khám dự kiến <b>' + time + '</b>, ' +
        '<p>Bạn vui lòng vào website <b> trước 5 phút </b> để chuẩn bị cho quá trình khám</p> ', 'info')
    }
    else if (trangthai === 'Đã khám') {
      this.route.navigate(['user/appoint-detail',id])
    }
  }
  registrationSchedule() {
    this.route.navigate(['user/registration-schedule'])


  }
  clickOffline(click) {

    if (click === 'Online' || click === 'Offline') {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin.filter(a => a.typeClinic == click);
    }
    else if (click === 'Đã đăng ký' || click === 'Đã hủy'||click==='Đã khám') {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin.filter(a => a.status == click);
    }
    else {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin;
    }

  }
}
