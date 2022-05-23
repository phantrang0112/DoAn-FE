import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderDoctorComponent } from "./header-doctor/header-doctor.component";
import { UserHeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    UserHeaderComponent,
    HeaderDoctorComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule
  ],
  exports:[
    UserHeaderComponent,
    HeaderDoctorComponent,
  ]

})
export class ShareModule { }
