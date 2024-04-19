import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch/fetch-data.service';
import { Product } from '../../model/Product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './components/product-header/product-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterOutlet, RouterLink, CommonModule, ProductHeaderComponent],
})
export class HeaderComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService) {}

  list_products: Product[] = [];
  list_categories: Set<string> = new Set<string>();
  isOpen: boolean = false;

  ngOnInit(): void {
    this.fetchDataService.getListaProductos().subscribe((response) => {
      this.list_products = response;
      response.map((prod) => this.list_categories.add(prod.Category));
    });
    if (window.innerWidth <= 640) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  changeText() {
    this.isOpen = !this.isOpen;
  }
}
