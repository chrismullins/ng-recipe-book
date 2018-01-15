import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hard Boiled Egg', 'the perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg'),
    new Recipe('Hard Boiled Egg', 'the perfect hard-boiled egg recipe', 'https://i.imgur.com/738TCU9.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
