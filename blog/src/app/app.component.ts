import { Component  } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBlnU4GK_Tb4ItVWbBY8PntK5t_VYTZzn8',
      authDomain: 'blog-4ff7c.firebaseapp.com',
      databaseURL: 'https://blog-4ff7c.firebaseio.com',
      projectId: 'blog-4ff7c',
      storageBucket: 'blog-4ff7c.appspot.com',
      messagingSenderId: '1046159071223'
    }
    firebase.initializeApp(config);
  }
}
