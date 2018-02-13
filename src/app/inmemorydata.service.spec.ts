import { TestBed, inject } from '@angular/core/testing';

import { InmemorydataService } from './inmemorydata.service';

describe('InmemorydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmemorydataService]
    });
  });

  it('should be created', inject([InmemorydataService], (service: InmemorydataService) => {
    expect(service).toBeTruthy();
  }));
});
