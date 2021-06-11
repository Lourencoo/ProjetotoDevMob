import { Component, OnInit } from '@angular/core';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';
import { ModalController } from '@ionic/angular';


interface Contact {
  tituloLembrete: string;
  lembrete: string;
}

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

  public contacts: Contact[] = [
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
  ]

  constructor(private modalController: ModalController) { }

  public async openModal(contact: Contact){
    const modal = await this.modalController.create({
      component: ContactDetailsModalComponent,
      componentProps: {
        contact: contact
      }
    });
    modal.present();

  }

  ngOnInit() {
  }

}
