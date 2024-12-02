import { Component, Input } from '@angular/core';
import { IVideojuegoBibliotecaCard } from '../../interfaces/videojuego-biblioteca-card';

@Component({
  selector: 'app-juego-card-component',
  imports: [],
  templateUrl: './juego-card-component.component.html',
  styleUrl: './juego-card-component.component.css'
})
export class JuegoCardComponentComponent {
  @Input() juego!: IVideojuegoBibliotecaCard;

  mostrarGeneros(generos: any[]): string {
    const generosText = generos.map(g => typeof g === 'string' ? g: g.nombre);
    return generosText.slice(0, 3).join(' ')
  }

  getShortDescription(descripcion: string): string {
    const maxLength = 100;
    return descripcion.length > maxLength ? descripcion.slice(0, maxLength) + '...' : descripcion;
  }
}
