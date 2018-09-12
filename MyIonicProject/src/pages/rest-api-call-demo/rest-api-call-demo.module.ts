import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestApiCallDemoPage } from './rest-api-call-demo';

@NgModule({
  declarations: [
    RestApiCallDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(RestApiCallDemoPage),
  ],
})
export class RestApiCallDemoPageModule {}
