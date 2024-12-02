import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoEspecificoComponent } from './juego-especifico.component';

describe('JuegoEspecificoComponent', () => {
  let component: JuegoEspecificoComponent;
  let fixture: ComponentFixture<JuegoEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoEspecificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
