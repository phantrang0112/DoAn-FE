import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','date','status',"hmm"];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',date:'01/1/2022',status:'vv'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',date:'01/1/2022',status:'vv'},

];
