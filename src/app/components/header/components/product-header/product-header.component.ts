import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../model/Product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.css',
})
export class ProductHeaderComponent {
  @Input() category: string = '';
  @Input() prevProducts: Product[] = [];
  products: Set<Product> = new Set<Product>();

  constructor(private router: Router) {}

  setProducts() {
    for (const product of this.prevProducts) {
      if (this.category === product.Category) {
        this.products.add(product);
      }
    }
  }

  clearProducts() {
    this.products.clear();
  }

  navigate(name: string) {
     this.router.navigate(['/details', name]).then(() => {
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigate(['/details', name]);
     });
  }
}
