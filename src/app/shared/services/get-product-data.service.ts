import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductDataService {
  private api_url:string = '/assets/data/products.json';
  constructor(private _http: HttpClient) { }

  getProductsList(): Observable<Product[]>{
    return this._http.get<Product[]>(this.api_url);
  }

}
