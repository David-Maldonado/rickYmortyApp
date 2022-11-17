import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  estados = [
    {id: "Alive", name: "Vivo"},
    {id: "Dead", name: "Muerto"}
 ];
transform(value: any): any {
      const estado = this.estados.find( e => e.id === value)
      return estado?.name || "Desconocido";
  }

}
