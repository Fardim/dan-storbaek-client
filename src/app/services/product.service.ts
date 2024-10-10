import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;
  path = `${this.baseUrl}Products`;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.path}/GetAllProducts`);
  }

  getProductById(productId: string) {
    return this.http.get<Product>(`${this.path}/GetProductById/${productId}`);
  }
  
  createProduct(dto: Product) {
    return this.http.post<Product>(`${this.path}/CreateProduct`, dto);
  }
  
  updateProduct(dto: Product) {
    return this.http.put<Product>(`${this.path}/UpdateProduct/${dto.id}`, dto);
  }
  
  deleteProduct(productId: string) {
    return this.http.delete(`${this.path}/Delete/${productId}`);
  }
}
