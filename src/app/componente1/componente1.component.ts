import { Component, OnInit } from '@angular/core';
import {ServicioDemoService} from '../servicio-demo.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Subscriber, of } from 'rxjs';

import { filter, map, tap } from 'rxjs/operators';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
})
export class Componente1Component implements OnInit {

  private texto: string;
  private campos: FormGroup;
  private errores: any;

  constructor(
    private service: ServicioDemoService,
    private fb: FormBuilder,
    private starWars: StarWarsService,
  ) {

  }

  ngOnInit() {
    this.starWars.getPlanets()
      .pipe(
        tap((data) => console.log('tap1', data)),
        map(res => {
          return res.results.map(item =>  { 
            return {
              nombre: item.name,
              diametro: item.diameter 
            }
          })
        }),
        tap((data) => console.log('tap 2', data)),
      )
      .pipe(
        map(res => {
          return res.map(item => {
            return {
              name: item.nombre,
              diameter: +item.diametro 
            }
          })
        }),
        tap(data => console.log('tap3', data)),
        //filter(item => item.name === 'Hoth'),
        tap(data => console.log('tap4', data))
      )
      .subscribe(
        (resultado: any) => {console.log('resultado', resultado)}, 
        (error) => {console.log('error http', error)},
        () => {console.log('suscriptor finalizado')}
      );

    console.log('onInit');
    //this.service.agregar('hola mundo');
    this.campos = this.fb.group({
      'texto': ['Ejemplo', [Validators.required, 
        Validators.maxLength(10)]],
      'texto2': ['', [Validators.email]],
    });

    this.campos.valueChanges
    .subscribe((valor) => {
      console.log(valor);
      const campoTexto = this.campos.get('texto');
      this.errores = JSON.stringify(campoTexto.errors);
    });
  }

  private enviar() {
    //if(!this.texto) return;
    this.service
    .agregar(this.campos.get('texto').value);
  }

}
