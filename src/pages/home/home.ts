import { Component } from "@angular/core";
import { ListaPage } from "../lista/lista";
import { Cadastro } from "../cadastro/cadastro";
import { NavController } from "ionic-angular";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
  })
  export class HomePage {
      
    public pages = [];

    constructor(public navCtrl: NavController) {

        this.pages = [
            {title: 'Lista de Jogos', component: ListaPage},
            {title: 'Cadastro Jogo', component: Cadastro}
        ]

    }

    abrirPagina(page) {
        this.navCtrl.push(page.component);
    }
  }