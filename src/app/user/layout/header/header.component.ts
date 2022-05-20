import {Component, HostListener, OnInit, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';


@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class UserHeaderComponent implements OnInit, DoCheck {


  constructor(private route: Router, private headerService: HeaderserviceService) {
    this.class = '';
    this.navbar_mobile = '';
    this.scrolled = window.pageYOffset > 48;
    console.log(this.scrolled);
  }

  class;
  navbar_mobile;
  class_bix = false;
  size;
  isDesktop: boolean;
  home;
  header;

  private mediaService = new MediaService('(min-width: 991px)');

  scrolled = false;

  ngOnInit() {
    this.home = this.headerService.getThisHome();
    this.header = this.headerService.getHeader();
    this.mediaService.match$.subscribe(value => {
        this.isDesktop = value;
        console.log('hihi' + this.isDesktop);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 48;
    if (this.home == true) {
      if (this.scrolled == true) {
        this.class = 'header-scrolled';
      } else {
        this.class = '';
      }
    }

    console.log(this.scrolled);
  }

  click() {

    if (this.class_bix == true) {
      this.navbar_mobile = '';
    } else {
      if (this.isDesktop == true) {
        this.navbar_mobile = '';
      } else {
        this.navbar_mobile = 'navbar-mobile';
      }
    }


    this.class_bix = !this.class_bix;
    console.log(this.navbar_mobile + this.isDesktop);
  }

  about() {
    this.home = false;
    this.class = 'header-scrolled';
    this.route.navigate(['about']);
  }

  headerClick(name) {
    if (name != 'home') {
      this.home = false;
      this.headerService.setThisHome(false);
      this.class = 'header-scrolled';
    }
  }

  ngDoCheck() {
    this.header = this.headerService.getHeader();
    this.home = this.headerService.getThisHome();

  }


}

class MediaService {
  private matches = new ReplaySubject<boolean>(1);
  public match$ = this.matches.asObservable();

  constructor(public readonly query: string) {
    // we need to make sure we are in browser
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      // here we pass value to our ReplaySubject
      const listener = event => this.matches.next(event.matches);
      // run once and then add listener
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
}
