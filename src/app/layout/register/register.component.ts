import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private headerService: HeaderserviceService) { }
  formRegister:FormGroup;
  ngOnInit() {
    this.headerService.setActive('login');
  }

}
