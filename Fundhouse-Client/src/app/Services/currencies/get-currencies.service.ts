import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCurrenciesService {

  private apiUrl = 'https://localhost:5001/api/v1';

  constructor(private http: HttpClient) { }

  public getCurrencies(){
    const url = `${this.apiUrl}/currency`;

    return this.http.get(url);
  }

}






 

  