import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { SlideShowComponent } from './user/layout/slide-show/slide-show.component';
import {UserHeaderComponent} from './user/layout/header/header.component';
import { RegisterComponent } from './layout/register/register.component';
import { AppRoutingModule } from './user/user-routing.component';
import { UserComponent } from './user/user.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AboutComponent } from './user/about/about.component';
import { ListDoctorComponent } from './user/list-doctor/list-doctor.component';
import { AppointmentScheduleComponent } from './user/appointment-schedule/appointment-schedule.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RegistrationScheduleComponent } from './user/appointment-schedule/registration-schedule/registration-schedule.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './user/contact/contact.component';
import { AskAnswerComponent } from './user/ask-answer/ask-answer.component';
import { CKEditorModule } from 'ckeditor4-angular';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SlideShowComponent,
    UserHeaderComponent,
    RegisterComponent,
    UserComponent,
    AboutComponent,
    ListDoctorComponent,
    AppointmentScheduleComponent,
    RegistrationScheduleComponent,
    ContactComponent,
    AskAnswerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
