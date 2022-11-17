import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API } from "../../environments/RyMapi";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonajes(){
    return this.http.get(API.characters).pipe(
      map( (res:any) => res.results)
    )
  }

  getPersonaje(id:string | null){
    return this.http.get(`${API.characters}/${id}`)
  }
}
