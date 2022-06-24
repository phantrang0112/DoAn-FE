import { Routes } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { HomeComponent } from "./home/home.component";
import { ListAppointmentComponent } from "./list-appointment/list-appointment.component";
import { ListDoctorComponent } from "./list-doctor/list-doctor.component";
import { ListOfAppointmentComponent } from "./list-of-appointment/list-of-appointment.component";
import { ListPatientComponent } from "./list-patient/list-patient.component";

export const AdminRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list-appointment', component: ListAppointmentComponent},
  {path: 'list-of-appointment', component: ListOfAppointmentComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'list-doctor', component: ListDoctorComponent},
  {path: 'list-patient', component: ListPatientComponent},

]
