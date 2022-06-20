import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AppointmentScheduleService} from '../../service/doctorservice/appointment-schedule.service';
import {appointmentScheduleDoctor} from '../models/AppointmentSchedule';
import {Patient} from '../../models/patient';

@Component({
  selector: 'app-list-as',
  templateUrl: './list-as.component.html',
  styleUrls: ['../doctor.component.css']
})
export class ListASComponent implements OnInit {
  public listAppSch: appointmentScheduleDoctor[];
  public listOriginal: appointmentScheduleDoctor[];
  public listWaiting: appointmentScheduleDoctor[];
  public listExam: appointmentScheduleDoctor[];
  public status: string;
  public statusFilter: string;
  public item: appointmentScheduleDoctor;

  constructor(private route: Router, private appointment: AppointmentScheduleService) {
  }

  ngOnInit() {
    this.getListAppointmentSchedule();
  }

  getListAppointmentSchedule() {
    this.appointment.getListAppoint().subscribe(data => {
      if (data) {
        this.listAppSch = data;
        this.listOriginal = data;
        console.log(data);
      }
    }, error => {
      console.log(error);
    });
  }

  checkStatus(check: string) {
    if (check === 'chờ khám') {
      return true;
    }
  }

  getListAppSch() {
    this.listAppSch = this.listOriginal;
  }

  getListWaiting() {
    this.listAppSch = this.listOriginal.filter(value => value.status === 'chờ khám');
    this.statusFilter = 'chờ khám';
  }

  getListExam() {
    this.listAppSch = this.listOriginal.filter(value => value.status === 'đã khám');
    this.statusFilter = 'đã khám';
  }

  click() {
    this.route.navigate(['/doctor/listASdetail']);
  }
}
