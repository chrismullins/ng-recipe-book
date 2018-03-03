import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
// import {ShoppingListService} from '../../shopping-list.service';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditClicked() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['..'], {relativeTo: this.route})
  }


  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id)}
    );
  }

}
