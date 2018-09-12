import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertControllerDemoPage} from '../alert-controller-demo/alert-controller-demo';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public dataToStore;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {

    this.dataToStore={
      name:'Prantik',
      site:'pointDeveloper.com'
    }

  }
  moveToDemoAlert(event)
  {
    this.navCtrl.push(AlertControllerDemoPage);

  }
  setValue(){
    this.storage.set("object",this.dataToStore).then((successData)=>{
      console.log("Data Stored");
      console.log(successData);
    })
  }
  getValue(){
    this.storage.get("object").then((data)=>{
      console.log(data);
    })
  }
}
