import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WederService {

  getWeather(id : any){
    return this.httpClient.get<any>(`${this.apiRoute}?q=${id}&apikey=${this.apiKey}`);
  }

apiKey= '69d4699d6e4083ce2ce6c5875356b0d3';
apiRoute= 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) { }


}
