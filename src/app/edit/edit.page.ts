import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  private contacts = [
    {
      tituloLembrete: 'Lembrete 1',
      lembrete : 'Fazer curso de Html, e finalizar a atividade 2'
    },
    {
      tituloLembrete: 'Lembrete 2',
      lembrete: 'HAHAHAHAHA'
    },
    {
      tituloLembrete: 'Lembrete 3',
      lembrete: 'Não Tem'
    },
  ];

  public contact;

  constructor(route: ActivatedRoute) { 
    const tituloLembrete = route.snapshot.paramMap.get('tituloLembrete');
    this.contact = this.contacts.find(c => c.tituloLembrete === tituloLembrete);
  }

  ngOnInit() {
  }

  public saveChanges(){
    console.log(this.contact);
  }

}
