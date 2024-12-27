import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutProductsComponent } from './pages/about-products/about-products.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'product/:id',component:AboutProductsComponent
    }
];
