import { Component, OnInit, Input } from '@angular/core';
import { IHist } from '../../Models/history/IHist';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  @Input() history: IHist[] = [];

  ngOnInit(): void
  {
  }

}
