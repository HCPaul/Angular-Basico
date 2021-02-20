import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string [] = ['Hulk','Spiderman','IronMan','Thor'];
  heroesBorrados:string[]= [];

  borrarHeroe(){
    let heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados.unshift(heroeBorrado);
  }
}
