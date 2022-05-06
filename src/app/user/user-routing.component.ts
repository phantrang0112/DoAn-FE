import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../layout/login/login.component";
import { RegisterComponent } from "../layout/register/register.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'about',component: AboutComponent},
  // { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
