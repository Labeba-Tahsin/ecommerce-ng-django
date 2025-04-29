import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commonImports } from '../../shared/common.imports';

@Component({
  selector: 'app-product-detail',
  imports: [commonImports],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productId: string | null = null;

  product = {
    id: 1,
    title: 'Wireless Headphones',
    price: '$59.99',
    image: 'https://placehold.co/500x350?text=Product+1',
    description:
      'Experience immersive sound with our wireless headphones. Perfect for music lovers and professionals alike. Long battery life, sleek design, and crystal-clear audio.',
  };

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
    // You could fetch real product details using the ID
  }

  addToCart() {
    console.log('Added to cart:', this.product.title);
  }
}
