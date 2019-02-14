import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();
  private msg: string = 'en';

  constructor() { }

  set(message: any) {
    this.msg = message;
    this.subject.next(message);
  }

  setSame() {
    this.subject.next(this.msg);
  }

  get(): Observable<any> {
    return this.subject.asObservable();
  }
}