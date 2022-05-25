import { Routes } from "@angular/router";
import { AppointmentScheduleComponent } from "./appointment-schedule/appointment-schedule.component";
import { DoctorComponent } from "./doctor.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./list-as/detail/detail.component";
import { ListASComponent } from "./list-as/list-as.component";


export const DoctorRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'appointment-schedule', component: AppointmentScheduleComponent},
  {path: 'listAS', component: ListASComponent},
  {path: 'listASdetail', component: DetailComponent},
]