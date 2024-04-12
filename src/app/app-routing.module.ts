import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/homepage/home',pathMatch:'full'},
  {path:'homepage', loadChildren:()=>import('./components/components.module').then(home=>home.ComponentsModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
