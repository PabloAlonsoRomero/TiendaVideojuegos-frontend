import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCardHomeComponent } from './juego-card-home.component';

describe('JuegoCardHomeComponent', () => {
  let component: JuegoCardHomeComponent;
  let fixture: ComponentFixture<JuegoCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoCardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
