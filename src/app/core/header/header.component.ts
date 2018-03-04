import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeService} from '../../recipe.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {Recipe} from '../../recipes/recipe.model';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              public authService: AuthService,
              private store: Store<fromApp.AppState>) { }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      // (response: Response) => {console.log(response)},
      (response: HttpEvent<Object>) => {
        // console.log(response.type === HttpEventType.Sent)
        console.log(response)
      },
      (error) => {console.log(error)}
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
    // let newRecipes = new Array<Recipe>();
    // this.dataStorageService.fetchRecipes().subscribe(
    //   (response: Response) => {
    //     this.recipeService.setRecipes(response.json())
    //   },
    //     (error: Response) => {console.log(error)}
    // )
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.authState = this.store.select('auth')
  }

}
