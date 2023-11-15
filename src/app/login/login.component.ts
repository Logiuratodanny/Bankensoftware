import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  $customers = this.customerService.loadAll();

  constructor(private customerService: CustomerService) {
  }
}
