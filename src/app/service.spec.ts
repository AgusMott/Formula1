import { TestBed } from '@angular/core/testing';

import { ServicioCorredores } from './service';

describe('ServicioCorredores', () => {
  let service: ServicioCorredores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCorredores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});