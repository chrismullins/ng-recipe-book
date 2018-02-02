import {RecipesComponent} from './recipes/recipes.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'not-found', component: ErrorPageComponent , data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false})
    // RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
