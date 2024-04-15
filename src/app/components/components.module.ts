import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    WeatherAppComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentsModule { }
