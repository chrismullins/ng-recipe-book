import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    // this.router.navigate([feature]);
    // this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBBhb6xa0TKxCSjyWHTowSHMuVmUOLzdIo",
      authDomain: "ng-recipe-book-b0c9e.firebaseapp.com"
    });
  }

  constructor(private router: Router) {}
}
