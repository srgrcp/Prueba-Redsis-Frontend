import { TestBed } from '@angular/core/testing';

import { AccidenteService } from './accidente.service';

describe('AccidenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidenteService = TestBed.get(AccidenteService);
    expect(service).toBeTruthy();
  });
});
