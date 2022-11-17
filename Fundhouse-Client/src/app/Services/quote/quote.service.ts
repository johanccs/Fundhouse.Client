import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://localhost:5001/api/v1';

  constructor(private http: HttpClient) { }

  public getQuote(baseCur: string, exchCur: string, amount: number){
    const url = `${this.apiUrl}/quotes/${baseCur}/${exchCur}/${amount}`;

    return this.http.get(url);
  }

}
