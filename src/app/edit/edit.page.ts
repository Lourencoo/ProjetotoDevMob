import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage  {

  public contact;
  private originaltituloLembrete;

  constructor(route: ActivatedRoute, 
    private contactService: ContactService,
    private navCtrl: NavController
    
    ) { 
    this.originaltituloLembrete = route.snapshot.paramMap.get('tituloLembrete');
    this.contact = contactService.findByLembrete(this.originaltituloLembrete);
  }


  public saveChanges(){
   this.contactService.updateByLembrete(this.originaltituloLembrete, this.contact);
   this.navCtrl.back();
  }

}
