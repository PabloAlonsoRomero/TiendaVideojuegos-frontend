import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { JuegoCardComponentComponent } from '../../components/juego-card-component/juego-card-component.component';
import { UsuarioService } from '../../services/usuarioService/usuario.service';

@Component({
  selector: 'app-biblioteca-page',
  imports: [NavbarComponent, JuegoCardComponentComponent],
  templateUrl: './biblioteca-page.component.html',
  styleUrl: './biblioteca-page.component.css'
})
export class BibliotecaPageComponent {
  

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    console.log('hola')

    if (userId) {
      this.usuarioService.getBiblioteca(userId).subscribe(
        response => {
          console.log("Biblioteca obtenida exitosamente");
          console.log(response);
        },
        error => {
          console.log("Error al obtener biblioteca");
        }
      )
    }
  }
}
