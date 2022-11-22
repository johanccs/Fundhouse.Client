import { Component } from '@angular/core';
import { IHist } from './Models/history/IHist';
import { QuoteOutput } from './Models/quote/quoteOutput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fundhouse Client';
  internalQuoteOutput: QuoteOutput;
  baseAmt: number = 0;
  quoteAmt: number = 0;

  history: IHist[] = [];

  receiveOutputFromChild(quoteOutput: QuoteOutput)
  {
    this.baseAmt = quoteOutput.amount;
    this.quoteAmt = quoteOutput.quotedAmount;
  }

  receiveHistoryFromChild(hist: IHist[]){
    this.history = hist;
    console.log(this.history);
  }
}
