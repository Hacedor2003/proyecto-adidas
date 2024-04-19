import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private newMessage: string = '';
  messageChange = new Subject<void>();

  constructor() {}

  setNewMessage(newMessage: string) {
    this.newMessage = newMessage;
    this.messageChange.next();
  }
  getNewMessage() {
    return this.newMessage;
  }
  get messaheChanged$() {
    return this.messageChange.asObservable();
  }
}
