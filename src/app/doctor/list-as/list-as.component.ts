import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-as',
  templateUrl: './list-as.component.html',
  styleUrls: ['../doctor.component.css']
})
export class ListASComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  click() {
    this.route.navigate(['/doctor/listASdetail']);
  }
}
