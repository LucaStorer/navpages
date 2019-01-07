import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'Mainpg'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goback(){
    this.navCtrl.pop()
  }

  ShowLoginPage(){

    let modalLogin = this.modalCtrl.create('ModulePage',{name: 'Luca'});
    modalLogin.present();
    modalLogin.onDidDismiss(params => {
      if (params){
      alert( params.name + ',' + params.password)
      }
})

  }

}
