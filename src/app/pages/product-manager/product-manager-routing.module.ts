import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductManagerComponent } from './product-manager.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [{
  path: '',
  component: ProductManagerComponent,
  children: [
    {
      path: 'list-product',
      component: ListProductComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductManagerRoutingModule { }

export const routedComponents = [
  ProductManagerComponent,
  ListProductComponent,
];
