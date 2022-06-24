import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from 'src/app/service/adminservice/patient-service.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  displayedColumns: string[] = ['position', 'patientName', 'phone', 'brithday', 'email', "hmm"];
  dataSource;
  listPatientOrigin;
  listAppoint;
  constructor(private patientService: PatientServiceService) {

  }


  ngOnInit() {
    this.patientService.getListDoctor().subscribe(data => {
      this.listPatientOrigin = data;
      console.log(data);
      this.dataSource=this.listPatientOrigin
    })
  }

}
