import { Component } from '@angular/core';
import { IonicPage, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the PagemodulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ModulePage'
})
@Component({
  selector: 'page-pagemodule',
  templateUrl: 'pagemodule.html',
})
export class PagemodulePage {
  name: String = ''
  password: String = ''

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.name = this.navParams.get('name')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagemodulePage');
  }

  login(){

    this.viewCtrl.dismiss({name: this.name, password:this.password});


  }

}
