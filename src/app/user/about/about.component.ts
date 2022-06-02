import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private headerService: HeaderserviceService,private route: ActivatedRoute) { }
name;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['PayerID'];
      console.log('paymentId', this.name);
    });

    this.headerService.setActive('about');
  }

}
