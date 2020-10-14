import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  {path: '' , component: CreateProductComponent},
  {path: 'create' , component: CreateProductComponent},
  {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
