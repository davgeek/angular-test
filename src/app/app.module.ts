import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DemoDirective } from './demo.directive';
import { ExponentePipe } from './exponente.pipe';
import { BgColorDirective } from './bg-color.directive';
import { I18nPipe } from './i18n.pipe';
import { FormularioComponent } from './formulario/formulario.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    DemoDirective,
    ExponentePipe,
    BgColorDirective,
    I18nPipe,
    FormularioComponent,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
