import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuarioService/usuario.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  constructor(private usuarioService: UsuarioService) {}

  registrarUsuario(form: any) {
    const nuevoUsuario: Usuario = {
      nombre: form.value.user,
      email: form.value.email,
      contrasena: form.value.password,
      telefono: form.value.phone,
      nombre_usuario: form.value.username
    }

    this.usuarioService.postUsuario(nuevoUsuario).subscribe(
      response => {
        console.log('Usuario registrado:', response);
      },
      error => {
        console.error('Error al registrar usuario:', error)
      }
    )
  }
}
