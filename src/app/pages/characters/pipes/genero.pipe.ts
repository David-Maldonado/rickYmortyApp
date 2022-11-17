import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  generos = [
    {id: "Male", name: "Masculino"},
    {id: "Female", name: "Femenino"}
 ];
transform(value: any): any {
      const genero = this.generos.find( e => e.id === value)
      return genero?.name || "Desconocido";
  }

}
