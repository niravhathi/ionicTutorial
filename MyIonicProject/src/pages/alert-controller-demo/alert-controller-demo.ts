import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertControllerDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert-controller-demo',
  templateUrl: 'alert-controller-demo.html',
})
export class AlertControllerDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertControllerDemoPage');
  }

  presentAlert(event) {
    // let alert = this.alertCtrl.create({
    //   title: 'Low battery',
    //   subTitle: '10% of battery remaining',
    //   buttons: ['Dismiss']
    // });
    // alert.present();
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
    console.log('Alert clicked');
  }

  presentAlertWithInputs()
  {
    let alert = this.alertCtrl.create({
      title:"Alert Controller",
      message : "Alert Message",
      inputs:[{
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }],
      buttons:[{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          // if (User.isValid(data.username, data.password)) {
          //   // logged in!
          // } else {
          //   // invalid login
          //   return false;
          // }
          console.log(data.username,data.password)
        }
      }]
    })
 alert.present()

  }
}
