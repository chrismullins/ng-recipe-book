import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  onAddToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

}
