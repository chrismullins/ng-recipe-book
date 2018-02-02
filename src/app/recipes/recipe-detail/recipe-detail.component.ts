import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
// import {ShoppingListService} from '../../shopping-list.service';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  onAddToShoppingList() {
    // for (let ingredient of this.recipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {this.recipe = this.recipeService.getRecipeById(+params['id'])}
    );
  }

}
