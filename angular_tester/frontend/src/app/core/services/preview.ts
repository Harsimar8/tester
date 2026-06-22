import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreviewService {

  private subject = new BehaviorSubject<string>('');
  html$ = this.subject.asObservable();

  setHtml(url: string) {
    this.subject.next(url);
  }
}