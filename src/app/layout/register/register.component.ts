import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private headerService: HeaderserviceService) { }

  ngOnInit() {
    this.headerService.setActive('login');
  }

}
