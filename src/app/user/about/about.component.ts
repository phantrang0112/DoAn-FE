import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private headerService: HeaderserviceService) { }

  ngOnInit() {
    this.headerService.setActive('about');
  }

}
