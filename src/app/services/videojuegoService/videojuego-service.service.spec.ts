import { TestBed } from '@angular/core/testing';

import { VideojuegoServiceService } from './videojuego-service.service';

describe('VideojuegoServiceService', () => {
  let service: VideojuegoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojuegoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
