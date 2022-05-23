import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DoctorRoutes } from "./doctor.routing.componet";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
HomeComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(DoctorRoutes),
    NgbModule,

  ],

})

export class DoctorModule {}

