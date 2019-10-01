import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'David';
  edad: number = 26;
  private contador: number = 0;

  private incrementarContador() {
    this.contador++;
  }
}
