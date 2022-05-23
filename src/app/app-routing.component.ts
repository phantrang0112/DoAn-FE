import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)
      }
    ]
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/doctor/doctor.module').then(m=>m.DoctorModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'user/home'
  },

  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [

    RouterModule
  ],
})
export class AppRoutingModule { }
