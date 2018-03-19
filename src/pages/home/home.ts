import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Cadastro } from '../cadastro/cadastro';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaJogos: Array<Jogo> = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  abrirCadastro() {
    // Variável me criada para referenciar a classe Home
    // dentro da função callback
    let me = this;

    // Função callback, criada para ser executada no
    // método de salvar da classe Cadastro
    let onCallback = (jogo: Jogo) => {
      me.listaJogos.push(jogo);
    }

    // Ao chamar a tela de Cadastro, é passada
    // a função callback por parâmetro
    this.navCtrl.push(Cadastro, {callback: onCallback})
  }

  editar(item: Jogo) {
    this.navCtrl.push(Cadastro, {jogo: item});
  }

}
