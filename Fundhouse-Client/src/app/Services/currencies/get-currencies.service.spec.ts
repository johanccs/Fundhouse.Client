import { GetCurrenciesService } from "./get-currencies.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from "@angular/core/testing";
import { GetCurrency } from "src/app/Models/currency/getCurrency";


describe('GetCurrencies', () => {
    let currencyService: GetCurrenciesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GetCurrenciesService]
        });

        currencyService = TestBed.get(GetCurrenciesService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it(`should fetch currencies`, async(inject([HttpTestingController, GetCurrenciesService],
        (httpClient: HttpTestingController, currencyService: GetCurrenciesService) => {
            const currencies = [
                new GetCurrency('USD', 'United States Dollar'),
                new GetCurrency('ZAR', 'South African Rand')
            ];

            currencyService.getCurrencies().subscribe((currencies: any) => {
                expect(currencies.length).toBe(2);
            });

            let req = httpMock.expectOne('https://localhost:5001/api/v1/currency');
            expect(req.request.method).toBe("GET");
            httpMock.verify();
        }))
    );
});