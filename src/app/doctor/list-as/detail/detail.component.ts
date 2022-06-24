import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Medicine } from 'src/app/models/medicine';
import { MedicineServiceService } from 'src/app/service/doctorservice/medicine-service.service';
import { SickServiceService } from 'src/app/service/doctorservice/sick-service.service';
import { PrescriptionService } from '../../../service/doctorservice/prescription.service';
import { Prescription } from '../../models/prescription';




// tslint:disable-next-line:variable-name
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id;
  listSick;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private presService: PrescriptionService, private router: Router, private route: ActivatedRoute, private siskService: SickServiceService, private medicineService: MedicineServiceService) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  listPres: Prescription[];
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  formMedicine:FormGroup= new FormGroup({

    medicine :new FormControl(),
    amount: new FormControl(),
    dosage: new FormControl()

  })
  sicks = new FormControl();
  search;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  sickListOrgin = [];
  sickList = [];
  medicineList: Medicine[] = [];
  medicineListOrigin: Medicine[] = [];
  @ViewChild('selectList', { static: false }) selectList: ElementRef;
  myDropDown: string;
  stateGroupOptions: Observable<Medicine[]>;
  onChangeofOptions(newGov) {
    console.log(newGov);
  }

  ngOnInit() {
    // tslint:disable-next-line:no-non-null-assertion
    this.presService.getListPrescription().subscribe(data => {
      if (data) {
        this.listPres = data;
        console.log(data);
      }
    });
    this.siskService.getListSick().subscribe(data => {
      this.listSick = data;
      console.log(data);
      this.sickListOrgin = this.listSick;
      this.sickList = this.sickListOrgin;
    })
    this.medicineService.getListMedicine().subscribe(data => {
      this.medicineListOrigin = data;
      this.medicineList = this.medicineListOrigin;
      console.log(data);
    })

  }

  private _filterGroup(value) {
    let listFilter: Medicine[] = [];
    let search = this.formMedicine.controls.medicine.value;
    console.log(search);
    if (value != "") {
      this.medicineList = this.medicineListOrigin.filter(a => a.medicinename.toLowerCase().includes(search.toLowerCase()));
      console.log(this.medicineList);
    }
    else {
      this.medicineList = this.medicineListOrigin;
    }
  }

  return() {
    console.log(this.stateForm.value);
  }
  filterItem(event) {
    console.log(event);
    if (!event) {
      this.sickList = this.sickListOrgin;
    }
    if (event.key.length <= 1) {

      console.log(this.search);
      this.sickList = this.sickListOrgin.filter(a => a.sickname.toLowerCase()
        .includes(this.search.toLowerCase()));
      console.log('formControl' + this.sicks.value.length);
      if (this.sicks.value.length > 0) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.sicks.value.length; i++) {
          if (!this.sickList.includes(this.sicks.value[i])) {
            this.sickList.push(this.sicks.value[i]);
          }

        }
      }
      // else if(this.sicks.value.length>0){
      //   this.sickList.push(this.sicks.value[0]);
      // }



    } else {
      this.sickList = this.sickListOrgin;
    }
    console.log(this.sickList + typeof event.key);

  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

