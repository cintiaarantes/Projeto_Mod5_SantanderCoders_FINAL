import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { IFood } from '../../interfaces/food.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './food-create.component.html',
  styleUrl: './food-create.component.css'
})
export class FoodCreateComponent implements OnInit {
  foodsList: IFood[] = [];
  foodForm: FormGroup;

  constructor() {
    this.foodForm = new FormGroup({
      nome: new FormControl(),
      ingredientes: new FormControl(),
      referencia: new FormControl(),
      preço: new FormControl(),
      totalEstoque: new FormControl()
    });
  }

  ngOnInit() {
    this.foodsList = JSON.parse(localStorage.getItem("foodsList") || "[]");
  }

  submitForm() {
    const newFood: IFood = this.foodForm.value;
    this.foodsList.push(newFood);
    localStorage.setItem("foodsList", JSON.stringify(this.foodsList));
  }
}
