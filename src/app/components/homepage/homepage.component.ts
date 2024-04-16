import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  locationsecondMethod: any
  locationlatitude: any
  locationlongitude: any

  weatherData: any;

  coords: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.locationsecondMethod = position.coords
      this.locationlatitude = this.locationsecondMethod.latitude
      this.locationlongitude = this.locationsecondMethod.longitude
      console.log(this.locationlatitude);
      console.log(this.locationlongitude);



      this.coords = [this.locationlatitude, this.locationlongitude]
      console.warn(this.coords);

      this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.coords}`, {
        headers: {
          'X-RapidAPI-Key': '9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      }).subscribe((data) => {
        console.log(data);

        this.weatherData = data;
      })
    })


  }
}