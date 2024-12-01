import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.userId = localStorage.getItem('userId');
    this.admin = localStorage.getItem('admin') === 'true';

    if (this.isLoggedIn) {
      this.nombre_usuario = localStorage.getItem('nombre_usuario');
    }
  }

  cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('nombre_usuario');
    this.isLoggedIn = false;
    this.userId = null;
    this.nombre_usuario = null;
    this.router.navigate(['/'])
  }
}
