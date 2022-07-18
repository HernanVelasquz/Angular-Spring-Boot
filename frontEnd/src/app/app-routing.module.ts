import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './ComponentHero/heroes/heroes.component';
import { HeroDetailComponent } from './ComponentHero/hero-detail/hero-detail.component';
import { VistaAuthComponent } from './vista-auth/vista-auth.component';
import { VistaRegistrarComponent } from './vista-registrar/vista-registrar.component';

const router: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent 
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path:'auth',
    component:VistaAuthComponent
  },
  {
    path:'register',
    component:VistaRegistrarComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
