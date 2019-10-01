import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioDemoService } from '../servicio-demo.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(
    private servicio: ServicioDemoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('onInit');
    this.servicio.agregar('valor 2');
    const nombre = this.route.snapshot.paramMap.get('nombre');
    console.log(nombre);

    const edad = this.route.snapshot.queryParamMap.get('edad');
    console.log(edad);
  }

  private limpiar() {
    this.servicio.limpiar();
  }

}
