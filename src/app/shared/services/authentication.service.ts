import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login} from './../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = environment.MyAPI + 'AuthenticationApi';
  constructor(private http: HttpClient) { }

  rigestration(employee: Employee ): Observable<any> {
    return this.http.post(this.apiUrl + '/Registration', employee);
    }
    login(loginmodel: Login ): Observable<any> {
      return this.http.post(this.apiUrl + '/Login', loginmodel);
      }
}
