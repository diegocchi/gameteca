import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Cadastro } from '../cadastro/cadastro';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  public listaJogos: Array<Jogo> = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public storage: Storage) {

    this.storage.get('listaJogos').then(listaSalva => {
      if (listaSalva != null) {
        this.listaJogos = listaSalva;
      }
    }).catch(e => {
      console.log(e);
    });
  }

  abrirCadastro(item: Jogo) {
    // Variável me criada para referenciar a classe Home
    // dentro da função callback
    let me = this;

    // Função callback, criada para ser executada no
    // método de salvar da classe Cadastro
    let onCallback = (jogo: Jogo) => {
      let existe = false;
      for(let i = 0; i < this.listaJogos.length; i++) {
        if (this.listaJogos[i].codigo == jogo.codigo) {
          this.listaJogos[i] = jogo;
          existe = true;
        }
      }
      if (!existe) me.listaJogos.push(jogo);

      this.storage.set('listaJogos', this.listaJogos);
    }

    // Ao chamar a tela de Cadastro, é passada
    // a função callback por parâmetro
    this.navCtrl.push(Cadastro, {jogo: item, callback: onCallback})
  }

  apagarItem(posicao: number) {
    this.listaJogos.splice(posicao, 1);
    this.storage.set('listaJogos', this.listaJogos);
  }

  confirmarExclusao(posicao: number) {
    let me = this;
    let alerta = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja mesmo deletar este item?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            me.apagarItem(posicao);
          }
        },
        {
          text: 'Não',
          role: 'cancel'
        }
      ]
    });
    alerta.present();
  }

}
