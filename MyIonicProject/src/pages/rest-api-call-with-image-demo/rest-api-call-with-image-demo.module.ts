import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestApiCallWithImageDemoPage } from './rest-api-call-with-image-demo';

@NgModule({
  declarations: [
    RestApiCallWithImageDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(RestApiCallWithImageDemoPage),
  ],
})
export class RestApiCallWithImageDemoPageModule {}
