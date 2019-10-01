import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDemoService {

  arreglo: string[];

  constructor() { 
    this.arreglo = [];
  }

  public agregar(valor: string) {
    this.arreglo.push(valor);
    console.log('se agrego un valor');
  }

  public limpiar() {
    this.arreglo = [];
  }
}
