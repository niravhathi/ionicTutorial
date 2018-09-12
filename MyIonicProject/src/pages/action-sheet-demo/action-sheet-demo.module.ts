import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetDemoPage } from './action-sheet-demo';

@NgModule({
  declarations: [
    ActionSheetDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetDemoPage),
  ],
})
export class ActionSheetDemoPageModule {}
