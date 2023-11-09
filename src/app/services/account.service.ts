import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Account} from "./model/account.model";
import {Injectable} from "@angular/core";
import {Customer} from "./model/customer.model";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  public loadAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:8080/account');
  }

  public loadAccount(id: number): Observable<Account[]> {
    return this.httpClient.get<Account[]>('http://localhost:8080/customer/' + id + '/accounts');
  }

  public depositAccount(id: number, amount: number): Observable<any> {
    return this.httpClient.post('http://localhost:8080/account/deposit/' + id + '/' + amount, {}
    )
  }

  public payoutAccount(id: number, amount: number): Observable<any> {
    return this.httpClient.post('http://localhost:8080/account/payout/' + id + '/' + amount, {})
  }

  public tranferAccount(id: number, amount: number, iban: String): Observable<any> {
    return this.httpClient.post('http://localhost:8080/account/transfer/' + id + '/' + amount + '/' + iban, {})
  }
}
