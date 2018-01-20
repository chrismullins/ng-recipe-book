import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe('Hard Boiled Egg', 'the perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg'),
    new Recipe('Hard Boiled Egg2', 'another perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
