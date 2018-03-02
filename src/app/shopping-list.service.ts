import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from './shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();
  // private ingredients: Ingredient[] = [
  //   new Ingredient('apples', 5),
  //   new Ingredient('tomatoes', 10)
  // ];
  private ingredients: Ingredient[] = [];

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  constructor() { }

}
