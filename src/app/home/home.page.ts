import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import firebase from 'firebase/app'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  public async login() {
    const result = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if (result) {
      this.router.navigateByUrl('/cursos');
    }
  }

}