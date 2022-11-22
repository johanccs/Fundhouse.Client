import { GetCurrenciesService } from './get-currencies.service';
import { HttpClient } from '@angular/common/http';
import { GetCurrency } from 'src/app/Models/currency/getCurrency';
import { of } from 'rxjs/internal/observable/of';

describe("Currency Service", () => {
  let httpClientspy: jasmine.SpyObj<HttpClient>;
  let currencyService: GetCurrenciesService;  
  let CURRENCIES: GetCurrency[] = [
    new GetCurrency('USD', 'United States Dollar'),
    new GetCurrency('ZAR', 'South African Rand')
  ]
  beforeEach(() => {
    httpClientspy = jasmine.createSpyObj('HttpClient', ['get']); 
    currencyService = new GetCurrenciesService(httpClientspy);
  });

  describe('getCurrencies()', () => {
    it('should return expected currencies', () => {
      httpClientspy.get.and.returnValue(of(CURRENCIES));
      currencyService.getCurrencies().subscribe({
        next: currencies => {
          expect(currencies).toEqual(CURRENCIES);
        },
        error: (e) => {
          console.log(e);
        }
      });
      expect(httpClientspy.get).toHaveBeenCalledTimes(1);
    });
  });
});