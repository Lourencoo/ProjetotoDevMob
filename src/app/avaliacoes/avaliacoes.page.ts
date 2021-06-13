import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

interface Post {
  user: string;
  message: string;
  timestamp: firebase.firestore.Timestamp
}

interface User {
  name: string,
  user: string
}

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.page.html',
  styleUrls: ['./avaliacoes.page.scss'],
})
export class AvaliacoesPage {

  public posts$ = this.afs.collection<Post>('posts',
  ref => ref.orderBy('timestamp', 'desc')
  ).valueChanges()
  public message = '';

  constructor(private afs: AngularFirestore, private afa: AngularFireAuth) { }

  public async publish() {
    const user = await this.afa.currentUser;
    const userInfo = await this.afs.doc<User>('users/' + user.uid).get().toPromise();
    const post: Post = {
      message: this.message,
      user: userInfo.data().user,
      timestamp: firebase.firestore.Timestamp.now()
  }
    this.afs.collection('posts').add(post);

  }
  
}
