import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage{


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



