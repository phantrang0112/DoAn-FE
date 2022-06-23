import { Routes } from "@angular/router";
import { AppointmentScheduleComponent } from "./appointment-schedule/appointment-schedule.component";
import { AskAnswerComponent } from "./ask-answer/ask-answer.component";
import { ChatComponent } from "./chat/chat.component";
import { DoctorComponent } from "./doctor.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./list-as/detail/detail.component";
import { ListASComponent } from "./list-as/list-as.component";
import { RegisterScheduleComponent } from "./register-schedule/register-schedule.component";


export const DoctorRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'appointment-schedule', component: AppointmentScheduleComponent},
  {path: 'listAS', component: ListASComponent},
  {path: 'listASdetail', component: DetailComponent},
  {path: 'register-schedule', component: RegisterScheduleComponent},
  {path: 'ask-answer', component: AskAnswerComponent},
  {path: 'video-chat', component: ChatComponent},
]
