import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.MyAPI + 'CategoryApi';

  constructor(private http: HttpClient) { }
  Get(): Observable<any> {
    return this.http.get(this.apiUrl);
    }
}
