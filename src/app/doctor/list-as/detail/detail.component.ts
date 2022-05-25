import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../../doctor.component.css']
})
export class DetailComponent implements OnInit {

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  sicks = new FormControl();
  search;
  sickListOrgin: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  sickList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];
  @ViewChild('selectList', { static: false }) selectList: ElementRef;
  myDropDown : string;
  onChangeofOptions(newGov) {
    console.log(newGov);
 }
  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );

  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);

    }
    return this.stateGroups;
  }
  return() {
    console.log(this.stateForm.value);
  }
  filterItem(event) {
    console.log(event)
    if (!event) {
      this.sickList = this.sickListOrgin;
    }
    if ( event.key.length <=1) {

      console.log(this.search)
      this.sickList = this.sickListOrgin.filter(a => a.toLowerCase()
        .includes(this.search.toLowerCase()));
        console.log(this.sicks.value.length)
        if(this.sicks.value.length>0){
          for(let i=0;i<this.sicks.value.length;i++){
            if(!this.sickList.includes(this.sicks.value[i])){
              this.sickList.push(this.sicks.value[i]);
            }

          }
        }
        // else if(this.sicks.value.length>0){
        //   this.sickList.push(this.sicks.value[0]);
        // }

let d= this.sicks.value;
this.sicks.setValue(d);

    }
    else{
      this.sickList = this.sickListOrgin;
    }
    console.log(this.sickList+ typeof event.key);

  }
}


