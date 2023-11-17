import {Component} from '@angular/core';
import {AccountService} from "../services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})

export class TransactionComponent {
  amount: string = '';
  selectedValue: string = '';
  destinationAccount: string = '';

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) {
  }

  onSubmit() {
    const amount = parseFloat(this.amount);

    if (!isNaN(amount) && amount > 0) {
      if (this.selectedValue === 'Einzahlen') {
        this.accountService.depositAccount(Number(this.route.snapshot.paramMap.get('id2')), amount)
          .subscribe(response => {
            this.openSnackBar('Transaction successful');
            this.navigateToAccount(true);
          }, error => {
          });

      } else if (this.selectedValue === 'Auszahlen') {
        this.accountService.payoutAccount(Number(this.route.snapshot.paramMap.get('id2')), amount)
          .subscribe(response => {
            this.openSnackBar('Transaction successful');
            this.navigateToAccount(true);
          }, error => {
          });
      } else if (this.selectedValue === 'Transfer') {
        this.accountService.tranferAccount(Number(this.route.snapshot.paramMap.get('id2')), amount, this.destinationAccount)
          .subscribe(response => {
            this.openSnackBar('Transaction successful');
            this.navigateToAccount(true);
          }, error => {
          });
      }
    } else {
      console.log('Invalid amount entered');
    }
  }

  openSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';

    this.snackBar.open(message, 'Close', {
      ...config,
      duration: 3000,
      panelClass: 'success-snackbar',
    });
  }

  navigateToAccount(successful: boolean) {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/account/${accountId}`], { queryParams: { success: successful } });
  }

  navigateBack() {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/account/${accountId}`]);
  }
}
