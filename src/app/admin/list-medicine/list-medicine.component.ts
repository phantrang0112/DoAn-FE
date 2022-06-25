import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../../service/adminservice/medicine.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent implements OnInit {
  listMedicine;
  listMedicineOriginal;
  p: number;
  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
    this.medicineService.getListMedicine().subscribe(data => {
      this.listMedicineOriginal = data;
      this.listMedicine = this.listMedicineOriginal;
    });
  }

}
