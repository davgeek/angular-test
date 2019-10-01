import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    // consultar el usuario logueado
    const user = localStorage.getItem('user');
    if(user) return true;
    // redireccionar a login o otro lugar
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
