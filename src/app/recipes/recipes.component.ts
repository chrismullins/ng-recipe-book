import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  // onDetailRecipeChanged($event) {
  //   console.log($event);
    // this.selectedRecipe = $event;
  // }

  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {this.selectedRecipe = recipe}
    // );
  }

}
