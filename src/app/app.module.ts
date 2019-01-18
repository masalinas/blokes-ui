import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/** import Swagger providers **/
import { BASE_PATH } from './shared/sdk';

import { HelmApiControllerService } from '../app/shared/sdk';

/** import angular environment variables **/
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.basePath },
    HelmApiControllerService
  ],
  declarations: [
    AppComponent
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
