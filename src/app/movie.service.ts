import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3"

  constructor(public http: Http) {
    console.log('olá filmes');
   }
   getLastestMovies(){
     return this.http.get(this.baseApiPath + "/movie/now_playing?api_key=dfed6aa4195200c674d21c67c82aac05&sort_by=genres");
   }
}
