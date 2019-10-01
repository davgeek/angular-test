import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private grupoCampos: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.grupoCampos = this.fb.group({
      'nombre': [],
    });

    this.grupoCampos.valueChanges.subscribe(datos => {
			console.log(datos);
    });
  }

  private submit() {
    console.log('submit', this.grupoCampos.get('nombre').value);
  }

}
