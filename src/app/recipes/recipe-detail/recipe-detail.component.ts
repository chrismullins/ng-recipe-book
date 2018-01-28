import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
// import {ShoppingListService} from '../../shopping-list.service';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  onAddToShoppingList() {
    // for (let ingredient of this.recipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
