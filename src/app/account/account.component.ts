import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../services/model/account.model";
import {AccountService} from "../services/account.service";
import {CustomerService} from "../services/customer.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    $account: Observable<Account[]> = this.accountService.loadAccount(Number(this.route.snapshot.paramMap.get('id')));
    $customer = this.customerService.loadByID(Number(this.route.snapshot.paramMap.get('id')));

    successMessage: string = '';

    constructor(private accountService: AccountService, private route: ActivatedRoute, private customerService: CustomerService) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.successMessage = 'Transaction successful!';
            this.setTimer();
        });
    }

    setTimer() {
        // Set a timer to clear the success message after 10 seconds
        setTimeout(() => {
            this.successMessage = '';
        }, 2000);
    }
}
