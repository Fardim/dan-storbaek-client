import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromProductActions from './product.action';
import { catchError, map, mergeMap, of, take, tap } from 'rxjs';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product.model';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
) {}

  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.ProductActionTypes.ProductLoad),
      tap(() => of(new fromProductActions.ProductLoading(true))),
      mergeMap(() =>
        this.productService.getAllProducts().pipe(
          take(1),
          mergeMap((response: Product[]) => [
            new fromProductActions.ProductLoadSuccess(response),
            new fromProductActions.ProductLoading(false),
          ]),
          catchError((err) => of(new fromProductActions.ProductLoading(false)))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.ProductActionTypes.DeleteProduct),
      map((action: fromProductActions.DeleteProduct) => {
        return action.payload;
      }),
      tap(() => of(new fromProductActions.ProductLoading(true))),
      mergeMap((ProductId: string) =>
        this.productService.deleteProduct(ProductId).pipe(
          take(1),
          mergeMap(() => [
            new fromProductActions.ProductLoad(),
          ]),
          catchError((err) => of(new fromProductActions.ProductLoading(false)))
        )
      )
    )
  );

  ProductToUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.ProductActionTypes.ProductLoadById),
      map((action: fromProductActions.ProductLoadById) => {
        return action.payload;
      }),
      tap(() => of(new fromProductActions.ProductLoading(true))),
      mergeMap((ProductId: string) =>
        this.productService.getProductById(ProductId).pipe(
          take(1),
          mergeMap((Product: Product) => [
            new fromProductActions.UpdateProduct(Product),
            new fromProductActions.ProductLoading(false),
          ]),
          catchError((err) => of(new fromProductActions.ProductLoading(false)))
        )
      )
    )
  );
}
