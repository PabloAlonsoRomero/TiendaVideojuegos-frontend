import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-juego-especifico',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './juego-especifico.component.html',
  styleUrl: './juego-especifico.component.css'
})
export class JuegoEspecificoComponent {

}
