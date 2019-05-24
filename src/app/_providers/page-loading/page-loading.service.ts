import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoadingService {
  isLoading$: EventEmitter<boolean> = new EventEmitter();

  emitLoading(isLoading: boolean) {
    this.isLoading$.emit(isLoading);
  }
}
