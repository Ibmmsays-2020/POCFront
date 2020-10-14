import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ]
})
export class ProductModule { }
