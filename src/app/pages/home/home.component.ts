import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { JuegoCardHomeComponent } from '../../components/juego-card-home/juego-card-home.component';
import { IJuegoCardHome } from '../../interfaces/ijuego-card-home';

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

  // Juego por plataforma
  bibiliotecaPlataforma: any[] = [];
  juegosPlataformaInterface: IJuegoCardHome[] = [];
  bibliotecaPlataformaLenght: number = 0;

  constructor(
    private videojuegoService: VideojuegoServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDatos();
    this.getJuegoByPlataforma('673216eb8217039c5e4c4c32')
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

  getJuegoByPlataforma(plataforma: string) {
    this.videojuegoService.getJuegosByPlataforma(plataforma).subscribe(
      response => {
        this.juegosPlataformaInterface = [];
        console.log('Juegos obtenidos exitosamente')
        this.bibiliotecaPlataforma = response;
        this.bibliotecaPlataformaLenght = this.bibiliotecaPlataforma.length;
        
        // For para meterlos al arreglo de juegosPlataformaInterface
        for (let i = 0; i < this.bibliotecaPlataformaLenght; i++) {
          this.juegosPlataformaInterface.push({
            _id: this.bibiliotecaPlataforma[i]._id,
            titulo: this.bibiliotecaPlataforma[i].titulo,
            descripcion: this.bibiliotecaPlataforma[i].descripcion,
            imagen: this.bibiliotecaPlataforma[i].imagenes[0]
          })
        }

        console.log(this.juegosPlataformaInterface)
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    )
  }
}
