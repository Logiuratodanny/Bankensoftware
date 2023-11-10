import {Component} from '@angular/core';
import {AccountService} from "../services/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent {
  amount: string = '';
  selectedValue: string = '';
  destinationAccount: string = '';

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
  }

  onSubmit() {
    const amount = parseFloat(this.amount);

    if (!isNaN(amount)) {
      if (this.selectedValue === 'Einzahlen') {
        this.accountService.depositAccount(Number(this.route.snapshot.paramMap.get('id2')), amount)
          .subscribe(response => {
            this.navigateToAccount();
          }, error => {
          });

      } else if (this.selectedValue === 'Auszahlen') {
        this.accountService.payoutAccount(Number(this.route.snapshot.paramMap.get('id2')), amount)
          .subscribe(response => {
            this.navigateToAccount();
          }, error => {
          });
      } else if (this.selectedValue === 'Transfer') {
        this.accountService.tranferAccount(Number(this.route.snapshot.paramMap.get('id2')), amount, this.destinationAccount)
          .subscribe(response => {
            this.navigateToAccount();
          }, error => {
          });
      }
    } else {
      console.log('Invalid amount entered');
    }
  }

  navigateToAccount() {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/account/${accountId}`]);
  }

  navigateBack() {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/account/${accountId}`]);
  }
}
