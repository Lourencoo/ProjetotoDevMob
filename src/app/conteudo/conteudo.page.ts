import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage {

  items = [];

  constructor() {
    this.addMoreItems();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
      }, 10);
  }

  addMoreItems() {
    for (let i=0; i<10; i++)
    this.items.push(i);
  }

  
  }


