import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent {
  constructor(private http:HttpClient){}
  city:string='';
  weatherData:any;
  getWeather(city?:string){
    this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,{
      headers:{
        'X-RapidAPI-Key': '9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }).subscribe((data)=>{
        this.weatherData=data
      })      
  }
}
