import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  personaje: any = [];
  constructor(
    private route : ActivatedRoute,
    private characterService: CharactersService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.getPersonaje(id).subscribe(res => {

      this.personaje = res;
    })
  }

}
