import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    // this.router.navigate([feature]);
    // this.loadedFeature = feature;
  }

  constructor(private router: Router) {}
}
