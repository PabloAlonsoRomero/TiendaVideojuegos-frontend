import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuarioService/usuario.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false;
  userId: string | null = null;
  nombre_usuario: string | null = null;
  admin: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.userId = localStorage.getItem('userId');

    if (this.isLoggedIn && this.userId) {
      this.nombre_usuario = localStorage.getItem('nombre_usuario');
      this.usuarioService.getAdmin(this.userId).subscribe(
        response => {
          if (response.admin) {
            this.admin = true;
          }
        },
        error => {
          console.log("Error al obtener admin");
        }
      )
    }
  }

  cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('nombre_usuario');
    this.isLoggedIn = false;
    this.userId = null;
    this.nombre_usuario = null;
    this.admin = false;
    this.router.navigate(['/'])
  }
}
