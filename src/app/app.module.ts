import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SetMoodPage} from '../app/set-mood/set-mood.page';
import { ErrorHandlingService } from './services/error-handling.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SetMoodPageModule } from './set-mood/set-mood.module';
import { HttpModule } from '@angular/http';
import {   HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,SetMoodPage],
  entryComponents: [SetMoodPage],
  imports: [BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: ErrorHandlingService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
