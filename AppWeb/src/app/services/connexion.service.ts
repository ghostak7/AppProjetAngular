import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connect = new Subject<number>()
  private account = 0

  constructor() { }

  getAccount() {
    return this.account
  }

  emitAccount() {
    this.connect.next(this.account)
  }

  Connection(id: number) {
    this.account = id
    this.emitAccount()
  }

  Disconnection() {
    this.account = 0
    this.emitAccount()
  }
}
