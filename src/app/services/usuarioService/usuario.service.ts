import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private baseUrl = "https://tiendavideojuegos-api.onrender.com"
  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  loginUsuario(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/login`, {
      email: email,
      password: password
    })
  }

  postUsuario(usuario: IUsuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/registro`, {
        nombre: usuario.nombre,
        email: usuario.email,
        contrasena: usuario.contrasena,
        telefono: usuario.telefono,
        nombre_usuario: usuario.nombre_usuario
    });
  }

  getBiblioteca(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/biblioteca/`,{
      userId: userId
    }
    );
  }

  getAdmin(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/admin/`, {
      userId: userId
    })
  }
}
