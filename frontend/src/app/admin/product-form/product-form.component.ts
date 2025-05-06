import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';

export interface Category {
  id: number;
  name: string;
  parentId?: number | null;
}

@Component({
  selector: 'app-product-form',
  imports: [commonImports],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  isEdit = false;
  selectedFile: File | null = null;
  product = {
    id: null,
    title: '',
    price: 0,
    quantity: 0,
    description: '',
    image: '',
    categoryId: null,
  };

  categoryOptions: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
  ];

  saveProduct() {
    if (this.isEdit) {
      // update logic
    } else {
      // add logic
    }
  }

  onImageUpload(event: any) {
    const files: File[] = event.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }
}
