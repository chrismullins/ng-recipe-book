import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(//private http: Http,
              private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  storeRecipes() {
    // const token = this.authService.getToken();
    // return this.http.put('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    // using new httpclient
    // return this.httpClient.put('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    // You can send query params like this!
    // return this.httpClient.put('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token),
    //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    // });
    const req = new HttpRequest('PUT',
      'https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
        //params: new HttpParams().set('auth', token)
      });
    return this.httpClient.request(req);
  }

  fetchRecipes() {
    // const token = this.authService.getToken();

    // return this.http.get('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json?auth=' + token)
    //   .map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) [
    //           recipe['ingredients'] = []
    //         ]
    //       }
    //       return recipes;
    //     }
    //   )
    // Using the new httpClient: notice get<Recipe[]>
    // return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json?auth=' + token)
      // .map(
      //   // by default with httpclient we get access to the body data right away, no response.json() needed
      //   (recipes) => {
      //     for (let recipe of recipes) {
      //       if (!recipe['ingredients']) [
      //         recipe['ingredients'] = []
      //       ]
      //     }
      //     return recipes;
      //   }
      // )
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b0c9e.firebaseio.com/recipes.json', {
      observe: 'body', // make this 'response' for full httpresponse
      responseType: 'json' // default is 'json', make it 'text' or 'blob', etc
    })
      .map(
        // by default with httpclient we get access to the body data right away, no response.json() needed
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) [
              recipe['ingredients'] = []
            ]
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    )
  }

}
