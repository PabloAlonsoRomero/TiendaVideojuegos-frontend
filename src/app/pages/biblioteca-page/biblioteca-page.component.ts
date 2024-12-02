import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { JuegoCardComponentComponent } from '../../components/juego-card-component/juego-card-component.component';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';
import { IVideojuegoBibliotecaCard } from '../../interfaces/videojuego-biblioteca-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biblioteca-page',
  imports: [NavbarComponent, JuegoCardComponentComponent, CommonModule],
  templateUrl: './biblioteca-page.component.html',
  styleUrl: './biblioteca-page.component.css'
})
export class BibliotecaPageComponent {

  biblioteca: any[] = [];
  bibliotecaInterface: IVideojuegoBibliotecaCard[] = [];
  bibliotecalenght: number = 0;

  constructor(
    private usuarioService: UsuarioService,
    private videojuegoService: VideojuegoServiceService
  ) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.usuarioService.getBiblioteca(userId).subscribe(
        response => {
          console.log("Biblioteca obtenida exitosamente");
          this.biblioteca = response.biblioteca;
          this.bibliotecalenght = this.biblioteca.length;

          for (let i = 0; i < this.bibliotecalenght; i++) {
            this.videojuegoService.getJuego(this.biblioteca[i]).subscribe(
              response => {
                this.bibliotecaInterface.push({
                  _id: response._id,
                  titulo: response.titulo,
                  descripcion: response.descripcion,
                  genero: response.genero,
                  desarrollador: response.desarrollador,
                  distribuidor: response.distribuidor,
                  imagen: response.imagenes[0]
                })
                console.log(this.bibliotecaInterface)
              }
            )
          }
        },
        error => {
          console.log("Error al obtener biblioteca");
        }
      )
    }

  }
}
