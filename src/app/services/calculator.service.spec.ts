import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should verify  1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calcular(1,4, CalculatorService.add)
      expect(addition).toEqual(5);
    })
  );

  it('should verify 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let min = service.calcular(1,4, CalculatorService.minus)
      expect(min).toEqual(-3);
    })
  );

  it('should verify 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let divis = service.calcular(1,4, CalculatorService.div)
      expect(divis).toEqual(0.25);
    })
  );

  it('should verify  1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multip = service.calcular(1,4, CalculatorService.multiple)
      expect(multip).toEqual(4);
    })
  );
});
