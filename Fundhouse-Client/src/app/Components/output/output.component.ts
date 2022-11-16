import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  baseAmt: number = 1000;
  quoteAmt: number = 15000;

  ngOnInit(): void {
  }

}
