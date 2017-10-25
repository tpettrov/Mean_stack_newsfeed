import { TestBed, inject } from '@angular/core/testing';

import { NewService } from './article.service';

describe('NewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewService]
    });
  });

  it('should be created', inject([NewService], (service: NewService) => {
    expect(service).toBeTruthy();
  }));
});
