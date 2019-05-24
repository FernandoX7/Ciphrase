import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material';
import { PipesModule } from './_pipes/pipes-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './_components/main-toolbar/main-toolbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainToolbarComponent
      ],
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        PipesModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
