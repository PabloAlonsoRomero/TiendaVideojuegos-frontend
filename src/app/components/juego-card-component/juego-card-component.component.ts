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
}
