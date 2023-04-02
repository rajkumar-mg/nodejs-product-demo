import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseAPIUrl = 'http://localhost:3030/api/';

  constructor(private httpClient: HttpClient) { }

  public getProducList() {
    return this.httpClient.get(`${this.baseAPIUrl}products`);
  }

  public purchaseCart(cartItems: any) {
    return this.httpClient.post(`${this.baseAPIUrl}purchase`, cartItems);
  }

}
