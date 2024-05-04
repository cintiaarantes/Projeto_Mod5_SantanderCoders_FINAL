import { Routes } from '@angular/router';

import { FoodsCatalogComponent } from './pages/foods-catalog/foods-catalog.component';
import { FoodCreateComponent } from './pages/food-create/food-create.component';

export const routes: Routes = [ 
    { path: '', component: FoodsCatalogComponent },
    { path: 'foods/create', component: FoodCreateComponent },
];
