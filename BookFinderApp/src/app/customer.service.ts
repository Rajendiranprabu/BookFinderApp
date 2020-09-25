import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customers/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  baseUrl = 'http://localhost:5000/customers';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllCustomers(): Observable<any> {

    console.log(this.authService.token);

    const options = {

      headers: {

        'authorization': 'Bearer ' + this.authService.token

      }

    };

    return this.http.get(this.baseUrl, options);

  }

}
