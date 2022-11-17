import { Component, OnInit } from '@angular/core';
import { GetCurrency } from 'src/app/Models/currency/getCurrency';
import { QuoteResponseDto } from 'src/app/Models/quote/quoteResponseDto';
import { GetCurrenciesService } from 'src/app/Services/currencies/get-currencies.service';
import { QuoteService } from 'src/app/Services/quote/quote.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  basecurrs: GetCurrency[] = [];
  exchangecurrs: GetCurrency[] = [];
  selectedBaseCurr: string;
  selectedExchangeCurr: string;
  amount: number = 0;
  quote: QuoteResponseDto;

  constructor
    (private currencyService: GetCurrenciesService,
    private quoteService: QuoteService) { }

  ngOnInit(): void{
    this.loadCurrencies();
  }

  private loadCurrencies(){
    this.currencyService.getCurrencies().subscribe(data =>
    {
      let currs = data as GetCurrency[];
      this.basecurrs = currs;
      this.exchangecurrs = currs.reverse();
      this.selectedBaseCurr = this.basecurrs[0].currencyId;
      this.selectedExchangeCurr = this.exchangecurrs[this.exchangecurrs.length].currencyId;
    });
  }

  convert(){
    this.quoteService.getQuote(this.selectedBaseCurr, this.selectedExchangeCurr, this.amount).subscribe(data => {
      console.log(data as QuoteResponseDto);
    });
  }

  swapCurrencies(){
    const tempCur = this.selectedBaseCurr;
    this.selectedBaseCurr = this.selectedExchangeCurr;
    this.selectedExchangeCurr = tempCur;
  }

}
