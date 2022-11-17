import { Component, OnInit } from '@angular/core';
import { UbicacionesService } from "../services/ubicaciones.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  ubicaciones: any =[];
  constructor(
    private ubicacionesService : UbicacionesService
  ) {}

  ngOnInit():void{
    this.obtenerUbicaciones();
  }

  obtenerUbicaciones(){
    this.ubicacionesService.getUbicaciones()
    .subscribe(res => { this.ubicaciones = res});
  }
}
