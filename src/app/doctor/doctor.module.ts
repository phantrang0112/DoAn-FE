import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DoctorRoutes } from "./doctor.routing.componet";


@NgModule({
  declarations: [

],
  imports: [

    CommonModule,
    RouterModule.forChild(DoctorRoutes),

  ],

})

export class DoctorModule {}

