import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Hard Boiled Egg', 'the perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg'),
    new Recipe('Hard Boiled Egg2', 'another perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // returns a copy
  }

  constructor() { }

}
