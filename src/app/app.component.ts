import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage-angular'
import { MenuController } from "@ionic/angular";
import { HomePage } from './home/home.page';
import { ProgressPage } from './progress/progress.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private menu: MenuController, private storage: Storage) {}
  public openEnd() {  
    this.menu.close();
   
    }
    async ngOnInit(){
      await this.storage.create();
    }
 
   
}
