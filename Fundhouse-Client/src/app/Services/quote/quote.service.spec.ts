import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { QuoteResponseDto } from 'src/app/Models/quote/quoteResponseDto';

import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let QUOTEQUOTEENTITY = new QuoteResponseDto("USD", "ZAR",100, new Date(), null)


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new QuoteService(httpClientSpy);
  });

  describe('getQuote', () => {
    it('should return expected quote entity', () => {
      httpClientSpy.get.and.returnValue(of(QUOTEQUOTEENTITY));
      service.getQuote("ZAR", "USD", 100).subscribe({
        next: quoteEntity =>{
          expect(quoteEntity).toEqual(QUOTEQUOTEENTITY);
        },
        error: (e) =>{
          console.log(e);
        }
      })
    });    
  });
});
