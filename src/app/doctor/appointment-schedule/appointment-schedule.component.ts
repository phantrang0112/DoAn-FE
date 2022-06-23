import {Component, OnInit} from '@angular/core';
import {AppointmentScheduleService} from '../../service/doctorservice/appointment-schedule.service';
import {appointmentSchedule} from '../../models/appointment-schedule';
import {Patient} from '../../models/patient';
import {PatientService} from '../../service/doctorservice/patient.service';
import {appointmentScheduleDoctor} from '../models/AppointmentSchedule';
import {NotifyService} from '../../service/notify.service';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['../doctor.component.css']
})
export class AppointmentScheduleComponent implements OnInit {
  public listAppSch: appointmentScheduleDoctor[];
  public listOriginal: appointmentScheduleDoctor[];
  public patientInfo: Patient[];
  public status: string;
  public existAppSch: boolean;
  public statusList: string[];
  public item: appointmentScheduleDoctor;
  p: number;

  constructor(private appointment: AppointmentScheduleService, private patientService: PatientService,
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
        console.log(this.listOriginal);
      }
    }, error => {
      this.existAppSch = false;
      this.notify.notifyErrorToggerMessage('Danh sách trống');
      console.log(error);
    });
  }

  getListAppSch() {
    this.status = 'Tất cả';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal;
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }

  getListRegistration() {
    this.status = 'Đã đăng ký';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal.filter(value => value.status === 'Đã đăng ký');
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }

  getListCanceled() {
    this.status = 'Đã hủy';
    if (this.existAppSch) {
      this.listAppSch = this.listOriginal.filter(value => value.status === 'Đã hủy');
    } else {
      this.notify.notifyErrorToggerMessage('Danh sách trống');
    }
  }
}

