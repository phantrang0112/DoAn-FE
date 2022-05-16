import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private headerService: HeaderserviceService) { }
 formLogin:FormGroup;
  ngOnInit() {
    this.headerService.setActive('login');
  }
  register(){
    this.router.navigate(['register']);
  }
}
