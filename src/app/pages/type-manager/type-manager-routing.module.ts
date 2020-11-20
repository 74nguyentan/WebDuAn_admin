import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeManagerComponent } from './type-manager.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { ListTypeComponent } from './list-type/list-type.component';

const routes: Routes = [{
  path: '',
  component: TypeManagerComponent,
  children: [
    {
      path: 'add-type',
      component: AddTypeComponent,
    },
    {
      path: 'list-type',
      component: ListTypeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeManagerRoutingModule { }

export const routedComponents = [
  TypeManagerComponent,
  AddTypeComponent,
  ListTypeComponent,
];
