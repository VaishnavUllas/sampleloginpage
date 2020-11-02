import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModuleComponent } from './login-module/login-module.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:LoginModuleComponent},
  {path:'home',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
