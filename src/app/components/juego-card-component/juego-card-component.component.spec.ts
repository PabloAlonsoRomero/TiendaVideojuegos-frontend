import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCardComponentComponent } from './juego-card-component.component';

describe('JuegoCardComponentComponent', () => {
  let component: JuegoCardComponentComponent;
  let fixture: ComponentFixture<JuegoCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
