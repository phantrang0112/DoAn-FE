import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DeptService} from 'src/app/service/adminservice/dept.service';
import {DoctorServiceService} from 'src/app/service/adminservice/doctor-service.service';
import {DoctorService} from 'src/app/service/doctorservice/doctor.service';
import {NotifyService} from '../../service/notify.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

  constructor(private doctorService: DoctorServiceService, private deptService: DeptService,
              private notify: NotifyService) {
  }

  listDoctor;
  listDoctorOrigin;
  listDept;
  dept: FormControl = new FormControl('Lọc theo khoa');
  p: number;

  ngOnInit() {
    this.doctorService.getListDoctor().subscribe(data => {
      this.listDoctorOrigin = data;
      this.listDoctor = this.listDoctorOrigin;
    });
    this.deptService.getListDept().subscribe(data => {
      this.listDept = data;
    });
  }

  filterDept(deptId) {
    console.log(deptId);
    if (deptId !== 0 && deptId != null) {
      this.listDoctor = this.listDoctorOrigin.filter(a => a.deptid === deptId);
    } else {
      this.listDoctor = this.listDoctorOrigin;
    }
  }
  xoaBacSi(id: number) {
    this.notify.xoaBacSi(id);
  }
}
