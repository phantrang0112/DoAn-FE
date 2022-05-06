import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { 'image': './assets/imglogin.png', 'text': 'khoa: khoaA', 'title': 'Nguyen văn a' },
    { 'image': './assets/imglogin.png', 'text': 'khoa: khoaA', 'title': 'Nguyen văn a' },
    { 'image': './assets/imglogin.png', 'text': 'khoa: khoaA', 'title': 'Nguyen văn a' },
    { 'image': './assets/imglogin.png', 'text': 'khoa: khoaA', 'title': 'Nguyen văn a' },
    { 'image': './assets/imglogin.png', 'text': 'khoa: khoaA', 'title': 'Nguyen văn a' }
  ];
  news = [
    { 'img': 'hinhbv4.jpg', 'title': 'Warner Music Group buys concert discovery service Songkick', 'text': 'Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major', 'date': '01-12-2021' },
    { 'img': 'hinhbv5.jpg', 'title': 'Warner Music Group buys concert discovery service Songkick', 'text': 'Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major', 'date': '01-12-2021' },
    { 'img': 'hinhbv4.jpg', 'title': 'Warner Music Group buys concert discovery service Songkick', 'text': 'Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major', 'date': '01-12-2021' },
    { 'img': 'hinhbv5.jpg', 'title': 'Warner Music Group buys concert discovery service Songkick', 'text': 'Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major', 'date': '01-12-2021' },
    { 'img': 'hinhbv4.jpg', 'title': 'Warner Music Group buys concert discovery service Songkick', 'text': 'Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major', 'date': '01-12-2021' },

  ]
  constructor(private headerService: HeaderserviceService ) { }

  ngOnInit() {
    this.headerService.setActive('home');
  }

}
