import { Component, OnInit } from '@angular/core';
import {AppointmentScheduleService} from '../../service/doctorservice/appointment-schedule.service';
import {appointmentSchedule} from '../../models/appointment-schedule';
import {Patient} from '../../models/patient';
import {PatientService} from '../../service/doctorservice/patient.service';
import {appointmentScheduleDoctor} from '../models/AppointmentSchedule';

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
  public item: appointmentScheduleDoctor;
  constructor(private appointment: AppointmentScheduleService, private patientService: PatientService) { }

  ngOnInit() {
    this.getListAppointmentSchedule();
    this.status = 'Lọc';
  }

  getListAppointmentSchedule() {
    this.appointment.getListAppoint().subscribe( data => {
      if (data) {
        this.listAppSch = data;
        this.listOriginal = data;
        console.log(data);
      }
    }, error => {
      console.log(error);
    });
  }

  getListRegistration() {
    this.listAppSch = this.listOriginal.filter(value => value.status === 'chờ khám');
    this.status = 'đã đăng ký';
  }

  getListCanceled() {
    this.listAppSch = this.listOriginal.filter(value => value.status === 'đã hủy');
    this.status = 'đã hủy';
  }
}

