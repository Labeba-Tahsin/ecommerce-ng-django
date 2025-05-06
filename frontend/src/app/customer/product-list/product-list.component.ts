import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [commonImports],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(private router: Router) {}
  selectedCategory = '';

  items: MegaMenuItem[] = [
    {
      label: 'Electronics',
      items: [
        [{ label: 'Phones' }, { label: 'Laptops' }, { label: 'Cameras' }],
      ],
    },
    {
      label: 'Books',
      items: [
        [{ label: 'Fiction' }, { label: 'Non-Fiction' }, { label: 'Comics' }],
      ],
    },
    {
      label: 'Clothing',
      items: [
        [
          {
            label: 'Men',
            items: [
              {
                label: 'Jacket',
              },
              {
                label: 'Shirt',
              },
            ],
          },
          { label: 'Women' },
          { label: 'Kids' },
        ],
      ],
    },
  ];

  products = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: '$59.99',
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Product+1',
    },
    {
      id: 2,
      title: 'Classic Novel',
      price: '$12.99',
      category: 'books',
      image: 'https://placehold.co/300x200?text=Product+2',
    },
    {
      id: 3,
      title: 'T-shirt',
      price: '$9.99',
      category: 'clothing',
      image: 'https://placehold.co/300x200?text=Product+3',
    },
    {
      id: 4,
      title: 'Smartphone',
      price: '$299.99',
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Product+4',
    },
  ];

  goToDetail(productId: number) {
    this.router.navigate(['/customer/product', productId]);
  }

  addToCart(event: Event, product: any) {
    event.stopPropagation(); // prevent card click
    console.log('Added to cart:', product);
  }

  addToWishlist(event: Event, product: any) {
    event.stopPropagation(); // prevent card click
    console.log('Added to wishlist:', product);
  }
}
