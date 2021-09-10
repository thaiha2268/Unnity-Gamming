/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertMoneyServiceService } from './convert-money-service.service';

describe('Service: ConvertMoneyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertMoneyServiceService]
    });
  });

  it('should ...', inject([ConvertMoneyServiceService], (service: ConvertMoneyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
