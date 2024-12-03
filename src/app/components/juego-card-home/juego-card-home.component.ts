import { Component, Input } from '@angular/core';
import { IJuegoCardHome } from '../../interfaces/ijuego-card-home';

@Component({
  selector: 'app-juego-card-home',
  imports: [],
  templateUrl: './juego-card-home.component.html',
  styleUrl: './juego-card-home.component.css'
})
export class JuegoCardHomeComponent {
  @Input() juego!: IJuegoCardHome;
}
