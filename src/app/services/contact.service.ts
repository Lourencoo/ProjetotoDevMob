import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
export interface Contact {
  tituloLembrete: string;
  lembrete: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public allContacts: Contact[] = [];

  constructor(private storage: Storage) { 
    this.loadFromStorage();
  }

  private async loadFromStorage(){
    const contacts = await this.storage.get('contacts') as Contact[];
    if(contacts){
      this.allContacts.push(...contacts);
    }
  }

  public findByLembrete(lembrete: string){
    return {...this.allContacts.find(c => c.tituloLembrete === lembrete)};
  }

  public updateByLembrete(lembrete: string, newData: Contact){
    const currentContact = this.allContacts.find(c => c.tituloLembrete === lembrete);
    currentContact.tituloLembrete = newData.tituloLembrete;
    currentContact.lembrete = newData.lembrete;

    this.storage.set('contacts', this.allContacts);
  }

  public addContact(newContact: Contact){
    this.allContacts.push(newContact);
    this.storage.set('contacts', this.allContacts);
  }
}
