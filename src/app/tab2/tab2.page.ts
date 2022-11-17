import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from "../services/episodios.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  episodios: any = [];

  constructor(private episodiosService : EpisodiosService) {}

  ngOnInit():void{
    this.obtenerEpisodios();
  }

  obtenerEpisodios(){
    this.episodiosService.getEpisodios()
    .subscribe(res => { this.episodios = res});
  }
}
