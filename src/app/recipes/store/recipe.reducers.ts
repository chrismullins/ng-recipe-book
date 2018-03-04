import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from  '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducers(state = initialState, action: RecipeActions.RecipeActions) {
  switch(action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
