
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatTabsModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { CKEditorModule } from "ckeditor4-angular";
import { AboutComponent } from "./about/about.component";
import { AppointmentScheduleComponent } from "./appointment-schedule/appointment-schedule.component";
import { PaymentComponent } from "./appointment-schedule/registration-schedule/payment/payment.component";
import { RegistrationScheduleComponent } from "./appointment-schedule/registration-schedule/registration-schedule.component";
import { AskAnswerComponent } from "./ask-answer/ask-answer.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

import { SlideShowComponent } from "./layout/slide-show/slide-show.component";
import { ListDoctorComponent } from "./list-doctor/list-doctor.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { TalkComponent } from "./talk/talk.component";
import { UserRoutes } from "./user-routing.component";
import { VideoCallComponent } from './talk/video-call/video-call.component';



@NgModule({
  declarations: [
    AboutComponent,
    ListDoctorComponent,
    AppointmentScheduleComponent,
    RegistrationScheduleComponent,
    ContactComponent,
    AskAnswerComponent,
    PaymentComponent,
    MyAccountComponent,
    TalkComponent,
    HomeComponent,
    SlideShowComponent,
    VideoCallComponent,

],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    MatCarouselModule.forRoot(),
    MatTabsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatExpansionModule,
    HttpClientModule,
    MatGridListModule
  ],

})

export class UserModule {}

