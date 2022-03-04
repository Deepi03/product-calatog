import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDisplayComponent } from './product-display/product-display.component';


const routes: Routes = [
  {path: '',redirectTo: '/products',pathMatch: 'full'},
  {path: 'products' , component: ProductDisplayComponent},
  { path: 'product-detail/:id', component: ProductDetailsComponent }
];
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
