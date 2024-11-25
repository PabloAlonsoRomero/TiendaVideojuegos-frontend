import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideojuegoServiceService } from '../../services/videojuego-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent implements OnInit{
  imageUrl: string = '';

  constructor(private videojuegoService: VideojuegoServiceService) {}

  ngOnInit() {
    this.getDatos();
  }

  getDatos() {
    this.videojuegoService.getJuegoRandom().subscribe(
      (respuesta) => {
        if (respuesta && respuesta.imagenes && respuesta.imagenes.length > 0) {
          this.imageUrl = respuesta.imagenes[0]; // Ajusta esto según la estructura de tu respuesta
        }
        console.log('Datos obtenidos:', this.imageUrl);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
