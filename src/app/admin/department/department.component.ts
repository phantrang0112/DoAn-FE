import { Component, OnInit } from '@angular/core';
import { DeptService } from 'src/app/service/adminservice/dept.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private deptService: DeptService) { }

  dataSource;
  ngOnInit() {
    this.deptService.getListDept().subscribe(data => {
      this.dataSource = data;
    })
  }

}
