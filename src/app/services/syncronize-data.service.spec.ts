import { TestBed } from '@angular/core/testing';

import { SyncronizeDataService } from './syncronize-data.service';

describe('SyncronizeDataService', () => {
  let service: SyncronizeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncronizeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
