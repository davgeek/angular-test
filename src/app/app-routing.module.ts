import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Componente1Component} from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'inicio',
    component: Componente1Component,
    children: [
      {
        path: '',
        component: EjemploComponent
      },
      {
        path: 'hijo/:nombre',
        component: Componente2Component,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**', component: Componente2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
