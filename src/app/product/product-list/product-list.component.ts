import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { Subject, takeUntil } from 'rxjs';
import * as productActions from '@store/product/product.action';
import * as fromProducts from '@store/product/product.selector';
import { Store, select } from '@ngrx/store';
import { State as ProductState } from '@store/product/product.state';
import { DeleteConfirmationComponent } from '@shared/components/delete-confirmation/delete-confirmation.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  productList: Product[] = [];
  isLoading: boolean = false;
  displayedColumns: string[] = ['name', 'model', 'brand', 'price', 'lotNo', 'action'];

  constructor(
    private productStore: Store<ProductState>,
    private router: Router,
    public dialog: MatDialog,
  ) {
    
  }
  
  ngOnInit(): void {
    this.productStore.dispatch(new productActions.ProductLoading(true));
    this.productStore.dispatch(new productActions.ProductLoad());

    this.productStore.pipe(takeUntil(this.unsubscribeAll$), select(fromProducts.getProductList)).subscribe(resp => {
      this.productList = resp;
    });
    this.productStore.pipe(takeUntil(this.unsubscribeAll$), select(fromProducts.isLoading)).subscribe(resp => {
      this.isLoading = resp;
    });
  }

  createProduct() {
    this.router.navigate([{ outlets: { sb1: `sb1/products/0`}}]);
  }

  gotoEdit(row: Product) {
    this.router.navigate([{ outlets: { sb1: `sb1/products/${row.id}`}}]);
  }

  confirmDelete(row: Product) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: "400px",
      data: { message: "Are you sure you want to delete this product?" },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.delete(row);
    });
  }

  delete(row: Product) {
    this.productStore.dispatch(new productActions.DeleteProduct(row.id));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }
}
