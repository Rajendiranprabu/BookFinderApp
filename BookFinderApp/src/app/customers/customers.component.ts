import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(
    private service: CustomerService,

    private authService: AuthService,

    private router: Router) {




  }


  ngOnInit(): void {

    if (!this.authService.isUserLoggedIn) {

      this.router.navigate(['/login']);
      console.log(this.authService.isUserLoggedIn)
    }

    else {
      this.loadCustomers();
      console.log("Customer constructor")

    }
  }

  loadCustomers() {
    console.log("Called");
    this.service.getAllCustomers()


      .subscribe((res: Customer[]) => {

        this.customers = res;
        console.log(this.customers);
      });

  }
}
