import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  constructor(private sls: ShoppingListService) { }

  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  onCleared() {
    this.selectedIngredient = null;
  }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
  }

}
