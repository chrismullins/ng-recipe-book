import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {console.log(response)},
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

  ngOnInit() {
  }

}
