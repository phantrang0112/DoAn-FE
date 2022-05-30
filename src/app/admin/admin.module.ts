import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminRoutes } from "./admin.routing";
import { HomeComponent } from './home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import {MatTableModule} from '@angular/material/table';
import { ListOfAppointmentComponent } from './list-of-appointment/list-of-appointment.component';
import { DepartmentComponent } from './department/department.component';
@NgModule({
  declarations: [
   HomeComponent,
   ListAppointmentComponent,
   ListOfAppointmentComponent,
   DepartmentComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule


  ],

})

export class AdminModule { }

