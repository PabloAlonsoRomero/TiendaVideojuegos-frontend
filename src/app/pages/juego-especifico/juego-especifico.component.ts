import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { VideojuegoServiceService } from '../../services/videojuegoService/videojuego-service.service';

@Component({
  selector: 'app-juego-especifico',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './juego-especifico.component.html',
  styleUrl: './juego-especifico.component.css'
})
export class JuegoEspecificoComponent {
  juegoId: string = '';
  juego: any;

  constructor(
    private route: ActivatedRoute,
    private videojuegoService: VideojuegoServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.juegoId = params.get('_id')!
      console.log(this.juegoId)
    })
  }
}
