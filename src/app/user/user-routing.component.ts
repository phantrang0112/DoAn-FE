import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../layout/login/login.component";
import { RegisterComponent } from "../layout/register/register.component";
import { AboutComponent } from "./about/about.component";
import { AppointmentScheduleComponent } from "./appointment-schedule/appointment-schedule.component";
import { RegistrationScheduleComponent } from "./appointment-schedule/registration-schedule/registration-schedule.component";
import { AskAnswerComponent } from "./ask-answer/ask-answer.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ListDoctorComponent } from "./list-doctor/list-doctor.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'about',component: AboutComponent},
  {path:'list-doctor',component: ListDoctorComponent},
  {path:'appointment-schedule',component: AppointmentScheduleComponent},
  {path:'registration-schedule',component: RegistrationScheduleComponent},
  {path:'contact',component: ContactComponent},
  {path:'ask-answer',component: AskAnswerComponent},
  // { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
