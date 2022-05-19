import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HeaderserviceService } from 'src/app/service/userservice/headerservice.service';

@Component({
  selector: 'app-ask-answer',
  templateUrl: './ask-answer.component.html',
  styleUrls: ['./ask-answer.component.css']
})
export class AskAnswerComponent implements OnInit {
  panelOpenState = false;
  constructor(private headerService:HeaderserviceService) { }
  post= false;
  public Editor = ClassicEditor;
  ngOnInit() {
    this.headerService.setActive('ask-answer');
  }
 clickPost(){
   this.post=!this.post;
   console.log(this.post)
 }
}
