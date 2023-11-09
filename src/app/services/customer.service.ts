import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./model/customer.model";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  public loadAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:8080/customer');
  }

  public loadByID(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>('http://localhost:8080/customer/' + id)
  }
}
