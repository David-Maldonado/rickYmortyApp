import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API } from "../../environments/RyMapi";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  constructor(
    private http: HttpClient
  ) { }

  getUbicaciones(){
    return this.http.get(API.locations).pipe(
      map( (res:any) => res.results)
    )
  }

  getUbicacion(id:string | null){
    return this.http.get(`${API.locations}/${id}`)
  }
}
