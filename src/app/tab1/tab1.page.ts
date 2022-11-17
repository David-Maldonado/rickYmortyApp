import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CharactersService } from "../services/characters.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  personajes: any = [];

  constructor(private charactersService : CharactersService) {}

  ngOnInit():void{
    this.obtenerPersonajes();
  }

  obtenerPersonajes(){
    this.charactersService.getPersonajes()
    .subscribe(res => { this.personajes = res});
  }

}
