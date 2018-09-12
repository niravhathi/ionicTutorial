import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

  
  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
    this.load()
  }

  load() {
    console.log("People Load called")
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }
  // return new Promise(resolve => {
  //   this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
  //     console.log(data);
  //     resolve(data);
     
  //   }, err => {
  //     console.log(err);
  //   });
  // });
  return new Promise(resolve => {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
      console.log(data);
      resolve(data['results']);
     
    }, err => {
      console.log(err);
    });
  });
}

}
