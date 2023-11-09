import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import {AccountService} from "./services/account.service";
import { TransactionComponent } from './transaction/transaction.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'account/:id', component: AccountComponent},
  {path: 'account/:id/transaction/:id2', component: TransactionComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
