import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API } from "../../environments/RyMapi";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(
    private http: HttpClient
  ) { }

  getEpisodios(){
    return this.http.get(API.episodes).pipe(
      map( (res:any) => res.results)
    )
  }

  getEpisodio(id:string | null){
    return this.http.get(`${API.episodes}/${id}`)
  }
}
