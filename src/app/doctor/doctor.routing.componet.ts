import { Routes } from "@angular/router";
import { AppointmentScheduleComponent } from "./appointment-schedule/appointment-schedule.component";
import { DoctorComponent } from "./doctor.component";
import { HomeComponent } from "./home/home.component";


export const DoctorRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'appointment-schedule', component: AppointmentScheduleComponent},
]
