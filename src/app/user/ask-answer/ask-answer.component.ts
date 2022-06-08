import {Component, OnInit, ViewChild} from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';
import {HeaderserviceService} from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-ask-answer',
  templateUrl: './ask-answer.component.html',
  styleUrls: ['./ask-answer.component.css']
})
export class AskAnswerComponent implements OnInit {
  panelOpenState = false;
 data;
  constructor(private headerService: HeaderserviceService) {
  }

  post = false;
  ngOnInit() {
    this.headerService.setActive('ask-answer');
  }

  clickPost() {
    this.post = !this.post;
    console.log(this.post);
  }
  registerAnswer(){
    console.log(this.data);
  }
  public onChange( event: CKEditor4.EventInfo ) {
    this.data= event.editor.getData();
}
}
