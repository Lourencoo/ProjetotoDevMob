import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LembretesPageRoutingModule } from './lembretes-routing.module';

import { LembretesPage } from './lembretes.page';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LembretesPageRoutingModule
  ],
  declarations: [LembretesPage, ContactDetailsModalComponent]
})
export class LembretesPageModule {}
