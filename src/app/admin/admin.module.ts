import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminRoutes } from "./admin.routing";
import { HomeComponent } from './home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
   HomeComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    MatTooltipModule


  ],

})

export class AdminModule { }

