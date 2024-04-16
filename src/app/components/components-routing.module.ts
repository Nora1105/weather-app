import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent,
    children:[
      {path:'weather-app', component:WeatherAppComponent},
      {path:'about-us', component:AboutUsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
