import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage-angular'
import { MenuController } from "@ionic/angular";
import { HomePage } from './home/home.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProgressPage } from './progress/progress.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private menu: MenuController, private storage: Storage, private afa: AngularFireAuth,
    private router: Router
    ) {}
  public openEnd() {  
    this.menu.close();
   
    }
    async ngOnInit(){
      await this.storage.create();
    }

    public async logout(){
    await  this.afa.signOut();
      this.router.navigateByUrl('/home')
    }
 
   
}
