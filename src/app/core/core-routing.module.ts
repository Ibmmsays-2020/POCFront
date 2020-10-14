import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { PageLayoutComponent } from './component/page-layout/page-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from '../product/components/create-product/create-product.component';

const routes: Routes = [
  {path: '' , component: PageLayoutComponent ,
 children: [
  {path: 'product' , loadChildren : () => import ('../product/product.module').then(m => m.ProductModule)},
  {path: 'shop' , loadChildren : () => import ('../shop/shop.module').then(m => m.ShopModule)},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', component : NotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
