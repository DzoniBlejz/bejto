import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './types';


export interface SearchResponse {
  Search : Movie [];
  Response: boolean;
  totalResults : number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovie(id: any) {
    return this.httpClient.get<any>(`${this.apiRoute}?i=${id}&apikey=${this.apiKey}`);
  }

  apiRoute = 'http://www.omdbapi.com/';
  apiKey = '43337568';
  constructor(private httpClient : HttpClient) { }

  searchMovie(title: string): Observable<SearchResponse> {

   return this.httpClient.get<SearchResponse>(`${this.apiRoute}?s=${title}&apikey=${this.apiKey}`);
  }
}
