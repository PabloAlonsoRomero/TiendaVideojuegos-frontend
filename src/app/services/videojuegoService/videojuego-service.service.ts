import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoServiceService {
  private baseUrl = "https://tiendavideojuegos-api.onrender.com"
  //private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getJuegoRandom(): Observable<any> {
    return this.http.get(`${this.baseUrl}/videojuegos/random`);
  }
}
