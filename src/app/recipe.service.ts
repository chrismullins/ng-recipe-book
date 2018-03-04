import {Recipe} from './recipes/recipe.model';
import {Ingredient} from './shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Hard Boiled Egg',
      'the perfect hard-boiled egg recipe',
      'https://i.imgur.com/738TCU9.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient( 'Water', 5)
      ]
    ),
    new Recipe('Hard Boiled Egg2',
      'another perfect hard-boiled egg recipe',
      'https://i.imgur.com/738TCU9.jpg',
      [
        new Ingredient('Egg2', 2),
        new Ingredient('Water2', 5),
        new Ingredient('Salt', 2)
        ]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // returns a copy
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  constructor() { }

}
