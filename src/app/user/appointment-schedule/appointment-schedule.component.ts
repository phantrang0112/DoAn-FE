import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NotifyService } from 'src/app/service/notify.service';
import { AppointmentScheduleService } from 'src/app/service/userservice/appointment-schedule.service';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit, DoCheck {
  listAppointmentScheduleOrigin;
  listAppointmentSchedule;
  constructor(private headerService: HeaderserviceService, private route: Router, private appoinentService: AppointmentScheduleService, private notify: NotifyService) {
    appoinentService.getListAppoint().subscribe((data) => {
      this.listAppointmentScheduleOrigin = data;
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin;
      console.log(data);
    })

  }
  ngDoCheck(): void {
    // let datenow = Date.now();
    // let datenow1 = moment(datenow).add(-10, 'minutes').format('HH:mm');
    // for (let item of this.listAppointmentScheduleOrigin) {
    //   let dateAppoint = new Date(item.date).getTime();
    //   if (item.status === "Chờ khám" && dateAppoint == datenow) {
    //     if (item.time == datenow1.toString()) {

    //     }
    //     this.notify.notifySuccessNotLink("Chuẩn bị khám", "Bạn có một lịch khám vào lúc:" + item.time + "với bác sĩ:" + item.doctorName + " 10p nữa sẽ đến giờ khám" + ".Vui lòng chuẩn bị vào khám");
    //   }

    // }

  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {
    this.headerService.setActive('appointment-schedule');
  }

  clickItemAppointment(item) {
    console.log(item.idappointmentSchedule);
    if (item.typeClinic === 'Offline' && item.status === 'Đã đăng ký') {
      this.notify.notifyNotLink('<p>Số thứ tự của bạn là:</p><strong>' + item.number + '</strong>', 'Thời gian khám dự kiến <b>' + item.time + '</b>, ' +
        '<p>Bạn vui lòng có mặt trước bệnh viện<b> trước 10 phút </b> để hoàn tất thủ tục đăng ký</p> ', 'info')
    } else if (item.typeClinic === 'Online' && item.status === 'Đã đăng ký') {
      this.notify.notifyNotLink('<p>Ngày khám của bạn là:</p><strong>' + item.number + '</strong>', 'Thời gian khám dự kiến <b>' + item.time + '</b>, ' +
        '<p>Bạn vui lòng vào website <b> trước 5 phút </b> để chuẩn bị cho quá trình khám</p> ', 'info')
    }
    else if (item.status === 'Đã khám') {
      this.route.navigate(['user/appoint-detail', item.idappointmentSchedule])
    }
    else if (item.status === 'Chờ khám') {
      if(item.date== Date.now()){
        let datenow = Date.now();
        let datenow2= moment(datenow);
        let datenow1 = moment(item.time).add(-10, 'minutes');
        let date= moment(item.time);
        if(datenow2=>datenow1 && datenow2<=date){
          this.notify.notifySuccess("chuẩn bị tới giờ khám",'/user/video-call','Vui lòng truy cập vào link dưới để tiến hành khám')
        }
        else{
          this.notify.notifyNotLink('<p>Ngày khám của bạn là:</p><strong>' + item.number + '</strong>', 'Thời gian khám dự kiến <b>' + item.time + '</b>, ' +
          '<p>Bạn vui lòng vào website <b> trước 5 phút </b> để chuẩn bị cho quá trình khám</p> ', 'info')
        }
      }

    }
  }
  registrationSchedule() {
    this.route.navigate(['user/registration-schedule'])


  }
  clickOffline(click) {

    if (click === 'Online' || click === 'Offline') {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin.filter(a => a.typeClinic == click);
    }
    else if (click === 'Đã đăng ký' || click === 'Đã hủy' || click === 'Đã khám') {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin.filter(a => a.status == click);
    }
    else {
      this.listAppointmentSchedule = this.listAppointmentScheduleOrigin;
    }

  }
}
