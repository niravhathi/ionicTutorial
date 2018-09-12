import { RestApiCallWithImageDemoPage } from './../pages/rest-api-call-with-image-demo/rest-api-call-with-image-demo';
import { RestApiCallDemoPage } from './../pages/rest-api-call-demo/rest-api-call-demo';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {AlertControllerDemoPage} from '../pages/alert-controller-demo/alert-controller-demo';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionSheetDemoPage } from '../pages/action-sheet-demo/action-sheet-demo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'List', component: ListPage },
      { title: 'AlertController Demo ', component:AlertControllerDemoPage},
      {title: 'ActionSheet Demo', component:ActionSheetDemoPage},
      {title:'RestApiCall Demo',component:RestApiCallDemoPage},
      {title:"RestApiCall with Image",component:RestApiCallWithImageDemoPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
