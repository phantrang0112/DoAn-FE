import {SelectionModel} from '@angular/cdk/collections';
import {Component, DoCheck, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-register-schedule',
  templateUrl: './register-schedule.component.html',
  styleUrls: ['./register-schedule.component.css']
})
export class RegisterScheduleComponent implements OnInit, DoCheck {

  constructor() {
  }

  displayedColumns: string[] = ['select', 'position', 'weekdays', 'date', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngDoCheck(): void {
    console.log(this.selection);
  }

  ngOnInit() {
    let date = new Date();
    console.log(date.getDate());
    if (date.getDay() === 0) {
      for (let i = 2; i < 9; i++) {
        const day = moment().add(i, 'days').format('YYYY MM DD');
        date = new Date(day);
        ELEMENT_DATA[i - 2].date = moment(day).format('DD/MM/YYYY');
        ELEMENT_DATA[i - 2].weekdays = this.changeDay(date.getDay());
        ELEMENT_DATA[i - 2].status = 'Chưa đăng ký';
      }

    } else {

    }
  }

  // tslint:disable-next-line:variable-name
  changeDay(current_day) {
    // tslint:disable-next-line:variable-name
    let day_name;
    switch (current_day) {
      case 0:
        day_name = 'Chủ nhật';
        break;
      case 1:
        day_name = 'Thứ hai';
        break;
      case 2:
        day_name = 'Thứ ba';
        break;
      case 3:
        day_name = 'Thứ tư';
        break;
      case 4:
        day_name = 'Thứ năm';
        break;
      case 5:
        day_name = 'Thứ sau';
        break;
      case 6:
        day_name = 'Thứ bảy';
    }
    return day_name;
  }

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
  {position: 1, weekdays: '', date: '', status: 'H'},
  {position: 2, weekdays: '', date: '', status: 'H'},
  {position: 3, weekdays: '', date: '', status: 'H'},
  {position: 4, weekdays: 'Hydrogen', date: '', status: 'H'},
  {position: 5, weekdays: 'Hydrogen', date: '', status: 'H'},
  {position: 6, weekdays: 'Hydrogen', date: '', status: 'H'},
  {position: 7, weekdays: 'Hydrogen', date: '', status: 'H'},

];
