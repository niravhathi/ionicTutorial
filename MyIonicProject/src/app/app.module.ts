import { SQLite } from '@ionic-native/sqlite';
import { RestApiCallWithImageDemoPage } from './../pages/rest-api-call-with-image-demo/rest-api-call-with-image-demo';
import { ActionSheetDemoPage } from './../pages/action-sheet-demo/action-sheet-demo';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, Toast } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {AlertControllerDemoPage} from '../pages/alert-controller-demo/alert-controller-demo'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { RestApiCallDemoPage } from '../pages/rest-api-call-demo/rest-api-call-demo';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertControllerDemoPage,
    ActionSheetDemoPage,
    RestApiCallDemoPage,
    RestApiCallWithImageDemoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertControllerDemoPage,
    ActionSheetDemoPage,
    RestApiCallDemoPage,
    RestApiCallWithImageDemoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    RestProvider,
    SQLite
  ]
})
export class AppModule {}
