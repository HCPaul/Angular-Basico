import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
    <h3><Strong>{{base}}</Strong></h3>


    <button (click)="acumular(base)">+{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)">-{{base}}</button>
    
    `
    
})
export class ContadorComponent{
    titulo:string = 'Titulo';
    numero:number = 10;
    base:number = 10;

    acumular(valor:number){
    this.numero += valor;
  }
}