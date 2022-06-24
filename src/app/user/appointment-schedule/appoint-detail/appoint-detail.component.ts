import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthrecordServiceService } from 'src/app/service/userservice/healthrecord-service.service';

@Component({
  selector: 'app-appoint-detail',
  templateUrl: './appoint-detail.component.html',
  styleUrls: ['./appoint-detail.component.css']
})
export class AppointDetailComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['position', 'name', 'amount', 'dosage'];
  constructor(private router: Router, private route: ActivatedRoute, private healtherecordService: HealthrecordServiceService) { }
  id;
  date;
  listMedicine;
  listSick;
  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.date = this.route.snapshot.paramMap.get('date');
    console.log(this.id);
    this.healtherecordService.getListMedicine(this.id).subscribe(data => {
      this.listMedicine = data;
      console.log(data);
      this.dataSource = this.listMedicine;
    })
    this.healtherecordService.getListSick(this.id).subscribe(data => {
      this.listSick = data;
      console.log(data);
    })
  }

}
