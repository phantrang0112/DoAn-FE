import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AppointmentScheduleService} from '../../service/doctorservice/appointment-schedule.service';
import {appointmentScheduleDoctor} from '../models/AppointmentSchedule';
import {Patient} from '../../models/patient';
import {NotifyService} from '../../service/notify.service';

@Component({
  selector: 'app-list-as',
  templateUrl: './list-as.component.html',
  styleUrls: ['../doctor.component.css']
})
export class ListASComponent implements OnInit {
  public listAppSch: appointmentScheduleDoctor[];
  public listOriginal: appointmentScheduleDoctor[];
  public status: string;
  public existAppSch: boolean;
  public statusFilter: string;
  public item: appointmentScheduleDoctor;
  p: number;

  constructor(private route: Router, private appointment: AppointmentScheduleService,
              private notify: NotifyService) {
    this.status = 'Tất cả';
  }

  ngOnInit() {
    this.getListAppointmentSchedule();
  }

  getListAppointmentSchedule() {
    this.appointment.getListAppoint().subscribe(data => {
      if (data) {
        this.existAppSch = true;
        this.listAppSch = data;
        this.listOriginal = data;
        console.log(data);
      }
    }, error => {
      this.existAppSch = false;
      console.log(error);
    });
  }

  checkStatus(check: string) {
    if (check === 'Chờ khám') {
      return true;
    }
  }

  getListAppSch() {
    this.status = 'Tất cả';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal;
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }

  getListWaiting() {
    this.status = 'Chờ khám';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal.filter(value => value.status === 'Chờ khám');
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }

  getListExam() {
    this.statusFilter = 'Đã khám';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal.filter(value => value.status === 'Đã khám');
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }

  chiTiet(id: number) {
    this.route.navigate(['/doctor/listASdetail']);
  }
}
