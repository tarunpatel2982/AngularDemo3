import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'',pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'dashbord',
    component:DashbordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
