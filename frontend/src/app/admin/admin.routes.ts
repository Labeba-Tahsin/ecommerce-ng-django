import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'manage-category', component: CategoryComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'edit-product/:id', component: ProductFormComponent },
];
