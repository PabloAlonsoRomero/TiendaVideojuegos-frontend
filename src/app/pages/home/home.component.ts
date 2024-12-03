import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { JuegoCardHomeComponent } from '../../components/juego-card-home/juego-card-home.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FooterComponent, JuegoCardHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent implements OnInit{
  data: any[] = [];
  imageUrl: string = '';
  _id : string = '';

  constructor(
    private videojuegoService: VideojuegoServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDatos();
  }

  getDatos() {
    this.videojuegoService.getJuegoRandom().subscribe(
      (respuesta) => {
        if (respuesta && respuesta.imagenes && respuesta.imagenes.length > 0) {
          this.data = respuesta;
          this.imageUrl = respuesta.imagenes[0]; // Ajusta esto según la estructura de tu respuesta
          this._id = respuesta._id;
        }
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  goToGame() {
    this.router.navigate(['juego', this._id])
  }
}
