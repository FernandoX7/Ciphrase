import {Component, OnInit, ViewChild} from '@angular/core';
import {AppConstants} from '../../../app-constants';
import {Router} from '@angular/router';
import {MatSelect, MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  toolbarTitle = '';
  currentRoute = '';
  HOME_PAGE_ROUTE = '/home';
  dropdownSelectedOption = '';
  snackBarConfig = new MatSnackBarConfig();

  @ViewChild('toolbarDropdown') toolbarDropdown: MatSelect;

  constructor(private router: Router,
              private snackBar: MatSnackBar) {
    this.snackBarConfig.duration = 2500;
  }

  ngOnInit(): void {
    this.updateToolbarTitleOnRouteChanges();
  }

  updateToolbarTitleOnRouteChanges() {
    this.router.events
      .subscribe((event: any) => {
        if (event.url) {
          this.currentRoute = event.url;
          switch (event.url) {
            case '/login':
              this.toolbarTitle = 'Login';
              break;
            case '/':
            case '/home':
              this.toolbarTitle = 'Home';
              break;
            default:
              this.toolbarTitle = `${ AppConstants.APP_TITLE } - 404`;
              break;
          }
        }
      });
  }

  navigateToItem(route: string) {
    this.router.navigate([route]);
  }

  openDropdown() {
    this.toolbarDropdown.open();
  }

  logoutUser() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
      .then(() =>
        this.snackBar.open('Logout Successful', null, this.snackBarConfig));
  }
}
