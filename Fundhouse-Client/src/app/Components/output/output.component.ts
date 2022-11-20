import { Component, OnInit, Input } from '@angular/core';
import { QuoteOutput } from 'src/app/Models/quote/quoteOutput';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  @Input() baseAmt: number;
  @Input() quoteAmt: number;
  
  ngOnInit(): void {
    
  }



}
