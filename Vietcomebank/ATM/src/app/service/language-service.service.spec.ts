/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanguageServiceService } from './language-service.service';

describe('Service: LanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageServiceService]
    });
  });

  it('should ...', inject([LanguageServiceService], (service: LanguageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
