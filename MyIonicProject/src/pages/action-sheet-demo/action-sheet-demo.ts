import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';



/**
 * Generated class for the ActionSheetDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet-demo',
  templateUrl: 'action-sheet-demo.html',
})
export class ActionSheetDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController,public alertCntrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetDemoPage');
  }

  showActionSheet(event)
  {
    let actionSheet = this.actionSheetCtrl.create({
      title:"Actin Sheet Demo",
      buttons:[{
        text:"Swift",
        handler:() => {
          console.log('Swift clicked');
          this.showAlert(event,"Swift");
        }
      },
      {
        text:"Objective - C",
        handler:() => {
          console.log('Objective - C clicked');
          this.showAlert(event,"Objective - C");
        }
      },
      {
        text:"ionic",
        handler:() => {
          console.log('ionic clicked');
          this.showAlert(event,"ionic");
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
     actionSheet.present();
    console.log("Show Action Clicked")
  }

  showAlert(event,selectedOptions)
  {
    let alertCntrl = this.alertCntrl.create({
     title:"Selected options",
     message:selectedOptions,
     buttons:['cancel']
    });
    alertCntrl.present();
  }
}
 