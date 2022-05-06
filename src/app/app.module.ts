import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
