import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [ProductDetailsComponent, ProductCardComponent, ProductListComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
