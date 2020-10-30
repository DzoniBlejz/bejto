import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../movies.service';
import { SearchResponseWeather } from '../types';
import { WederService } from '../weder.service';

@Component({
  selector:  'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  search: string = '';
  weather: SearchResponseWeather;

  constructor(private service : WederService) { }

  getWeeather(): void {
      this.service.getWeather(this.search).subscribe(x => {
        console.log(x);
      })

  }

  ngOnInit(): void {

  }

}
