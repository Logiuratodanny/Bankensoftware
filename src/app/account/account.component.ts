import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../services/model/account.model";
import {AccountService} from "../services/account.service";
import {Customer} from "../services/model/customer.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  $account: Observable<Account[]> = this.accountService.loadAccount(Number(this.route.snapshot.paramMap.get('id')));
  $customer = this.customerService.loadByID(Number(this.route.snapshot.paramMap.get('id')));


  constructor(private accountService: AccountService, private route: ActivatedRoute, private customerService: CustomerService) {}

  ngOnInit() {
    console.log(this.$account);
  }

  // transactionDialog(id: number, iban: string){
  //   onclick()
  // }

}
