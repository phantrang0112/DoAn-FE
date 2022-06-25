import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminRoutes} from './admin.routing';
import {HomeComponent} from './home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ListAppointmentComponent} from './list-appointment/list-appointment.component';
import {MatTableModule} from '@angular/material/table';
import {ListOfAppointmentComponent} from './list-of-appointment/list-of-appointment.component';
import {DepartmentComponent} from './department/department.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatNativeDateModule, MatSelectModule, MatInputModule} from '@angular/material';
import {ListDoctorComponent} from './list-doctor/list-doctor.component';
import {ListPatientComponent} from './list-patient/list-patient.component';
import {ListMedicineComponent} from './list-medicine/list-medicine.component';
import {ListSickComponent} from './list-sick/list-sick.component';
import {NewsComponent} from './list-news/news.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    ListAppointmentComponent,
    ListOfAppointmentComponent,
    DepartmentComponent,
    ListDoctorComponent,
    ListPatientComponent,
    ListMedicineComponent,
    ListSickComponent,
    NewsComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxPaginationModule,
  ]

})

export class AdminModule {
}

