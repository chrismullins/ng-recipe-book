import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';


const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService]},
  {path: 'shopping-list', component: ShoppingListComponent},
  // {path: 'not-found', component: ErrorPageComponent , data: {message: 'Page not found!'}},
  // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    // preload all lazily-loaded modules after the app has loaded
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    // enableTracing: set to true to print route tracing info
    // RouterModule.forRoot(appRoutes, {enableTracing: false})
    // RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
