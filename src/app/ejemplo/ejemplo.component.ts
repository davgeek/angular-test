import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit, OnChanges, OnDestroy {
  private variable: string = '';
  private fecha: Date = new Date();
  private dinero: number = 1050;

  @Input() entrada: string;
  
  private arreglo: string[] = [
    'David',
    'Pepe',
    'Carlos',
  ];

  get nombre() {
    return this.variable;
  }

  set nombre(valor: any) {
    this.variable = valor;
  }

  private agregar(): void {
    if(!this.variable) return;
    this.arreglo.push(this.variable);
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnChanges(value) {
    console.log('onChanges', value);
    this.entrada += value.entrada.currentValue;
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }
}
