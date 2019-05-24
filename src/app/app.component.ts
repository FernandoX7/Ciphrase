import {Component, OnInit} from '@angular/core';
import {PageLoadingService} from './_providers/page-loading/page-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fakeSideMenuItems: any = [
    {
      icon: '',
      name: 'First item'
    },
    {
      icon: '',
      name: 'Second item'
    }
  ];
  isRouteLoading = false;

  constructor(private pageLoadingService: PageLoadingService) {
  }

  ngOnInit(): void {
    this.pageLoadingService.isLoading$
      .subscribe((isRouteLoading: boolean) =>
        this.isRouteLoading = isRouteLoading);
  }
}
