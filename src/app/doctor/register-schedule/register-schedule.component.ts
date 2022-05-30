import { SelectionModel } from '@angular/cdk/collections';
import { Component, DoCheck, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-register-schedule',
  templateUrl: './register-schedule.component.html',
  styleUrls: ['./register-schedule.component.css']
})
export class RegisterScheduleComponent implements OnInit,DoCheck {

  constructor() { }
  ngDoCheck(): void {
    console.log(this.selection);
  }

  ngOnInit() {
    var date = new Date();
    console.log(date.getDate())
    if (date.getDay() == 5) {
      for(let i=1; i<8;i++){
        let day = moment().add(i, 'days').format('YYYY MM DD');
        date= new Date(day);
        ELEMENT_DATA[i-1].date=moment(day).format('DD/MM/YYYY');
        ELEMENT_DATA[i-1].weekdays=this.changeDay(date.getDay());
        ELEMENT_DATA[i-1].status="Chưa đăng ký";
      }

    }
    else{

    }
  }

  changeDay(current_day) {
    let day_name;
    switch (current_day) {
      case 0:
        day_name = "Chủ nhật";
        break;
      case 1:
        day_name = "Thứ hai";
        break;
      case 2:
        day_name = "Thứ ba";
        break;
      case 3:
        day_name = "Thứ tư";
        break;
      case 4:
        day_name = "Thứ năm";
        break;
      case 5:
        day_name = "Thứ sau";
        break;
      case 6:
        day_name = "Thứ bảy";
    }
    return day_name;
  }
  displayedColumns: string[] = ['select', 'position', 'weekdays', 'date', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);

  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

}
export interface PeriodicElement {
  weekdays: string;
  position: number;
  date: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, weekdays: '', date: "", status: 'H' },
  { position: 2, weekdays: '', date: "", status: 'H' },
  { position: 3, weekdays: '', date: "", status: 'H' },
  { position: 4, weekdays: 'Hydrogen', date: "", status: 'H' },
  { position: 5, weekdays: 'Hydrogen', date: "", status: 'H' },
  { position: 6, weekdays: 'Hydrogen', date: "", status: 'H' },
  { position: 7, weekdays: 'Hydrogen', date: "", status: 'H' },

];
