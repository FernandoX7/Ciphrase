import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app.material';
import {PipesModule} from './_pipes/pipes-module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomePageComponent} from './_components/_pages/home-page/home-page.component';
import {MainToolbarComponent} from './_components/main-toolbar/main-toolbar.component';
import {PageLoadingService} from './_providers/page-loading/page-loading.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainToolbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule, // HAS TO BE AFTER BrowserModule
    AppRoutingModule,
    PipesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PageLoadingService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: []
})
export class AppModule {
}
