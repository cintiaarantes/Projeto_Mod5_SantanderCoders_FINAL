import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { IFood } from '../../interfaces/food.interface';


@Component({
  selector: 'app-foods-kart',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatButtonModule],
  templateUrl: './foods-kart.component.html',
  styleUrl: './foods-kart.component.css'
})
export class FoodsKartComponent implements OnInit, OnChanges{
  @Input("foodsList") addedFoodsList: IFood[] = [];

  ngOnInit() {
    //console.log(this.addedFoodsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedFoodsList);
    localStorage.setItem("addedFoodsList", JSON.stringify(this.addedFoodsList));
  }

  removeFoodFromKart(food: IFood){
    const foodIndex = this.addedFoodsList.findIndex((currFood) => {
      return currFood.id === food.id;
    })
    this.addedFoodsList.splice(foodIndex, 1);
  }

  incrementTotalFoodCopies(food: IFood) {
    food.totalAddCarrinho++;
    if(food.totalAddCarrinho > food.totalEstoque){
      food.totalAddCarrinho = food.totalEstoque;
    }

    localStorage.setItem("addedFoodsList", JSON.stringify(this.addedFoodsList));
  }

  decrementTotalFoodCopies(food: IFood) {
    food.totalAddCarrinho--;

    if(food.totalAddCarrinho <= 0){
      this.removeFoodFromKart(food);
    } 

    localStorage.setItem("addedFoodsList", JSON.stringify(this.addedFoodsList));
  }
}
