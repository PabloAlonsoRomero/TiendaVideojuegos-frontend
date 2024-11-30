import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = "https://tiendavideojuegos-api.onrender.com"

  constructor(private http: HttpClient) { }

  postUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/registro`, {
        nombre: usuario.nombre,
        email: usuario.email,
        contrasena: usuario.contrasena,
        telefono: usuario.telefono,
        nombre_usuario: usuario.nombre_usuario
    });
  }
}
