import { Product } from '../models/Product';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  apiUrl = environment.MyAPI + 'ProductApi';

  constructor(private http: HttpClient) { }

  create(product: Product ): Observable<any> {
    return this.http.post(this.apiUrl, product);
    }
  Get(): Observable<any> {
    return this.http.get(this.apiUrl);
    }

}
