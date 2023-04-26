import { TestBed } from '@angular/core/testing';

import { ArrayManipulationService } from './array-manipulation.service';

describe('ArrayManipulationService', () => {
  let service: ArrayManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO Add more test

});
