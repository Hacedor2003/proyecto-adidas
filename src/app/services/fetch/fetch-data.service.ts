import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../model/Product';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  lista_productos: Observable<Product[]> = new Observable<[]>();
  productoById: Observable<Product> = new Observable<Product>();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData(): void {
    this.lista_productos = this.http.get<Product[]>(
      '../../../assets/DatosScraping.json'
    );
  }

  getListaProductos(): Observable<Product[]> {
    return this.lista_productos;
  }

  getProductoById(id: string): Observable<Product> {
    return (this.productoById = this.http.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    ));
  }
}
