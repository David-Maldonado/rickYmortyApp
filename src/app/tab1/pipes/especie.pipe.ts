import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'especie'
})
export class EspeciePipe implements PipeTransform {

  especies = [
    {id: "Human", name: "Humano"},
    {id: "Alien", name: "Extraterrestre"},
    {id: "Mythological Creature", name: "Criatura mitológica"}
 ];
transform(value: any): any {
      const especie = this.especies.find( e => e.id === value)
      return especie?.name || "Desconocido";
  }

}
