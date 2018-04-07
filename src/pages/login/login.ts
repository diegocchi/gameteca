import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Controla as validações de campos
  public formLogin: FormGroup;
  public usuario: any = {};
  public salvou = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required]
    });
  }

  logar(usuario) {
    this.salvou = true;
    if (this.formLogin.valid) {

    }
  }

}
