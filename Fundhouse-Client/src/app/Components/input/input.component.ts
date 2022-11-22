import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetCurrency } from 'src/app/Models/currency/getCurrency';
import { IHist } from 'src/app/Models/history/IHist';
import { QuoteOutput } from 'src/app/Models/quote/quoteOutput';
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
  amount: number = 1;
  buttonCaption = "Convert";
  displayErr = false;
  errMsg = "";

  @Output() quoteOutput = new EventEmitter<QuoteOutput>(); 
  @Output() history = new EventEmitter<IHist[]>();

  constructor
    (
      private currencyService: GetCurrenciesService,
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
      this.selectedExchangeCurr = this.exchangecurrs[this.exchangecurrs.length-1].currencyId;
    });
  }

  convert(){
    
    this.buttonCaption = "Busy...";

    if(!this.validate()){
      this.displayErr = true;
      this.errMsg = "Validation failed";

      return;
    }

    this.quoteService.getQuote(this.selectedBaseCurr, this.selectedExchangeCurr, this.amount).subscribe(data => {
      const quote = data as QuoteResponseDto;
      this.quoteOutput.emit(new QuoteOutput(this.amount, quote.quoteAmount));
      this.history.emit(quote.history);
      this.buttonCaption = "Convert";
    }, err => {
      console.log("Custom err");
      this.buttonCaption = "Close";
    });
  }

  validate(){
    return this.selectedBaseCurr !== this.selectedExchangeCurr;
  }

  swapCurrencies(){
    const tempCur = this.selectedBaseCurr;
    this.selectedBaseCurr = this.selectedExchangeCurr;
    this.selectedExchangeCurr = tempCur;
  }

}
