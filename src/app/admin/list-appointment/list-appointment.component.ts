import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','date','status',"hmm"];
  dataSource = ELEMENT_DATA;
  constructor() { }

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
