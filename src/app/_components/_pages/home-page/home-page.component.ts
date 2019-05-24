import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy {
  unsubscribe$: Subject<any> = new Subject();
  isLoading = false;

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
