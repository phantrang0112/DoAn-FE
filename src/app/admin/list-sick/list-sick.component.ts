import {Component, OnInit} from '@angular/core';
import {SickService} from '../../service/adminservice/sick.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-list-sick',
  templateUrl: './list-sick.component.html',
  styleUrls: ['./list-sick.component.css']
})
export class ListSickComponent implements OnInit {
  listSick;
  listSickOriginal;
  listTypeSick;
  filterSick;
  typeSick: FormControl = new FormControl('Lọc theo loại bệnh');
  p: number;
  constructor(private sickService: SickService) {
    this.filterSick = 'Lọc theo loại bệnh';
  }

  ngOnInit() {
    this.sickService.getListSick().subscribe(data => {
      this.listSickOriginal = data;
      console.log(data);
      this.listSick = this.listSickOriginal;
    });
    this.sickService.getListTypeSick().subscribe(data1 => {
      this.listTypeSick = data1;
      console.log(data1);
    });
  }

  filterTypeSick(idtypesick) {
    console.log(idtypesick);
    if (idtypesick !== 0 && idtypesick != null) {
      this.listSick = this.listSickOriginal.filter(a => a.sicktypeid === idtypesick);
    } else {
      this.listSick = this.listSickOriginal;
    }
  }
}
