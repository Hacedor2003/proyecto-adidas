import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch/fetch-data.service';
import { Product } from '../../model/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ContentComponent {
  constructor(private fetchDataService: FetchDataService) {
    this.fetchDataService.getListaProductos().subscribe((response) => {
      this.list_products = response;
      setInterval(() => {
        for (let index = 0; index < 5; index++) {
          const index2 = Math.floor(Math.random() * 445);
          this.list_products_dinamic[index] = this.list_products[index2];
          console.log(index2);
        }
      }, 2000);
    });
  }

  indexs: number[] = [];

  list_products: Product[] = [];
  list_products_dinamic: Product[] = [];
}
