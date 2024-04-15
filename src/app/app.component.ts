import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
  // constructor(private http:HttpClient){}
  // city:string='';
  // weatherData:any;
  // getWeather(city?:string){
  //   this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,{
  //     headers:{
  //       'X-RapidAPI-Key': '9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
  //       'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //     }
  //   }).subscribe((data)=>{
  //       this.weatherData=data
  //     })

  //     console.warn(this.weatherData);
      
  // }
}
