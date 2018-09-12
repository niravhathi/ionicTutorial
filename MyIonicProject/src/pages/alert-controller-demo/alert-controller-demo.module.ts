import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertControllerDemoPage } from './alert-controller-demo';

@NgModule({
  declarations: [
    AlertControllerDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertControllerDemoPage),
  ],
})
export class AlertControllerDemoPageModule {}
