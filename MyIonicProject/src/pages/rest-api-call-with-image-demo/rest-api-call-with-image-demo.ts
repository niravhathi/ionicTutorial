import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestApiCallWithImageDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest-api-call-with-image-demo',
  templateUrl: 'rest-api-call-with-image-demo.html',
})
export class RestApiCallWithImageDemoPage {

  public people: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public peopleService:PeopleServiceProvider) {
    this.loadPeople()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestApiCallWithImageDemoPage');
  }

  loadPeople(){

    /*this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users); */
    console.log("Load People called")
    this.peopleService.load()
    .then(data => {
      this.people = data;
      console.log(this.people)
    });
  }
}
