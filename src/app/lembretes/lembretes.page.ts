import { Component, OnInit } from '@angular/core';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';


@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

  public contacts: Contact[];

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
    ) { 
      this.contacts = this.contactService.allContacts;
    }

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
