import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FoodsCatalogComponent } from './pages/foods-catalog/foods-catalog.component';
import { FoodsKartComponent } from './components/foods-kart/foods-kart.component';
import { FoodCreateComponent } from './pages/food-create/food-create.component';
import { IFood } from './interfaces/food.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSidenavModule,
    MatIconModule, 
    HeaderComponent, 
    FoodsCatalogComponent,
    FoodsKartComponent, 
    FoodCreateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'restaurante-ecommerce';
  addedFoodsList: IFood[] = [];

  ngOnInit(){
    this.addedFoodsList = JSON.parse(localStorage.getItem("addedFoodsList") || "[]");
  } 

  findOrAddFood(food: IFood){
    for (let i=0; i<this.addedFoodsList.length; i++){
      const currFood = this.addedFoodsList[i];
      if (food.id === currFood.id){
        currFood.totalAddCarrinho = (food.totalAddCarrinho < food.totalEstoque)? currFood.totalAddCarrinho + 1 : currFood.totalAddCarrinho;
        return;
      }
    }

    food.totalAddCarrinho = 1;
    this.addedFoodsList.push(food);
  }


  addFoodToKart(food: IFood) {
    //console.log("Deu certo. O seu sanduiche já vai ser preparado e será add no carrinho!");
    
    this.findOrAddFood(food);
    this.addedFoodsList = [...this.addedFoodsList];
    
    //console.log(this.addedFoodsList);
  }
}
