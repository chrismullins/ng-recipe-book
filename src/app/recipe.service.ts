import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes/recipe.model';
import {Ingredient} from './shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
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

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // returns a copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  constructor(private shoppingListService: ShoppingListService) { }

}
