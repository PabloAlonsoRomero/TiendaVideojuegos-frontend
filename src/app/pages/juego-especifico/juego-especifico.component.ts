import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';
import { IVideojuegoEspecifico } from '../../interfaces/videojuego-especifico';

@Component({
  selector: 'app-juego-especifico',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './juego-especifico.component.html',
  styleUrl: './juego-especifico.component.css'
})
export class JuegoEspecificoComponent {
  juegoId: string = '';
  juego: IVideojuegoEspecifico = {
    _id: '',
    titulo: '',
    descripcion: '',
    genero: [],
    precio: { $numberDecimal: '' },
    desarrollador: { nombre: '' },
    distribuidor: { nombre: '' },
    plataformas: [],
    fecha_lanzamiento: '',
    imagenes: [],
    video_url: '',
    calificacion_promedio: { $numberDecimal: '' },
    estado: true
  };

  generosLenght: number = 0;
  generos: string = '';

  plataformasLenght: number = 0;
  plataformas: string = '';

  precio: string = '';
  calificacion_promedio: string = '';

  constructor(
    private route: ActivatedRoute,
    private videojuegoService: VideojuegoServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.juegoId = params.get('_id')!
      this.getOneVideojuego(this.juegoId);
    })
  }

  getOneVideojuego(_id: string) {
    this.videojuegoService.getJuego(_id).subscribe(
      response => {
        this.juego = response;
        this.juego.fecha_lanzamiento = this.formatDate(this.juego.fecha_lanzamiento);
        this.precio = this.juego.precio?.$numberDecimal || 'No disponible';
        this.calificacion_promedio = this.juego.calificacion_promedio?.$numberDecimal || 'N/A';

        this.generosLenght = this.juego.genero.length;
        for (let i = 0; i < this.generosLenght; i++) {
          if (i == this.generosLenght - 1) {
            this.generos += this.juego.genero[i].nombre;
          } else {
            this.generos += this.juego.genero[i].nombre + ' • ';
          }
        }

        this.plataformasLenght = this.juego.plataformas.length;
        for (let i = 0; i < this.plataformasLenght; i++) {
          if (i == this.plataformasLenght - 1) {
            this.plataformas += this.juego.plataformas[i].nombre;
          } else {
            this.plataformas += this.juego.plataformas[i].nombre + ' • ';
          }
        }
      }
    )
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Añade un 0 al mes si es necesario
    const day = String(date.getDate()).padStart(2, '0'); // Añade un 0 al día si es necesario
    return `${year}-${month}-${day}`;
  }


}
