import { TestBed } from '@angular/core/testing';

import { ChangeFontSizeService } from './change-font-size.service';

describe('ChangeFontSizeService', () => {
  let service: ChangeFontSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeFontSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
