import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private client: HttpClient) {}

  public getPlanets(): Observable<any> {
    return this.client.get('https://swapi.co/api/planets/');
  }
}
