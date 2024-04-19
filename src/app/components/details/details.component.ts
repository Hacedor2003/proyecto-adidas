import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/fetch/fetch-data.service';
import { Product } from '../../model/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fetchData: FetchDataService
  ) {}
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.fetchData.getListaProductos().subscribe((response) => {
      this.producto = response.filter((prod) => prod.Name === this.name)[0];
    });
  }

  name: string = '';
  producto: Product = new Product();
  productos: Product[] = [];
}
