import { Component, OnInit } from '@angular/core';
import {ServicioDemoService} from '../servicio-demo.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Subscriber } from 'rxjs';

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
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
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
