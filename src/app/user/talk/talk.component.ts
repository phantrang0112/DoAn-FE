import { Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TaklService } from 'src/app/service/userservice/takl.service';
import Talk from 'talkjs';
import { UserComponent } from '../user.component';
@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  private inbox: Talk.Inbox;
  private session: Talk.Session;
  private readonly newProperty = 'talkjsContainer';


  constructor(private talkService: TaklService) {}
  // @ViewChild() talkjsContainer!: ElementRef;
  ngOnInit() {
    this.createInbox();
  }
  @ViewChild('talkjsContainer', {static: false}) talkjsContainer!: ElementRef;
  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }
}
