import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { JuegoCardComponentComponent } from '../../components/juego-card-component/juego-card-component.component';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';

@Component({
  selector: 'app-biblioteca-page',
  imports: [NavbarComponent, JuegoCardComponentComponent],
  templateUrl: './biblioteca-page.component.html',
  styleUrl: './biblioteca-page.component.css'
})
export class BibliotecaPageComponent {
  biblioteca: any[] = [];
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
                console.log(response)
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
