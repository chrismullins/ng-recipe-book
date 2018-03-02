import {Action} from 'rxjs/scheduler/Action';
import {Ingredient} from '../../shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
        // ingredients: state.ingredients.concat(action.payload)
      }
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    default:
      return state;
  }
}
