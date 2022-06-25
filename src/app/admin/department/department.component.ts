import {Component, OnInit} from '@angular/core';
import {DeptService} from 'src/app/service/adminservice/dept.service';
import {NotifyService} from '../../service/notify.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private deptService: DeptService, private notify: NotifyService) {
  }

  dataSource;
  p: number;

  ngOnInit() {
    this.deptService.getListDept().subscribe(data => {
      this.dataSource = data;
    });
  }

  xoaKhoa(id) {
    this.notify.xoaKhoa(id);
  }

  themKhoa() {

  }

}
