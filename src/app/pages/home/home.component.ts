import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http'; 
import { VideojuegoServiceService } from '../../services/videojuego-service.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  datos: any;

  constructor(private videojuegoService: VideojuegoServiceService) {}

  ngOnInit() {

  }

  getImagen(): void {
    this.videojuegoService.getJuegoRandom().subscribe(
      (respuesta) => {
        this.datos = respuesta;
        console.log('Datos obtenidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
