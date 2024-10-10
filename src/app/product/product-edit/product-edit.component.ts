import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@models/product.model';
import { Subject, take, takeUntil } from 'rxjs';
import * as productActions from '@store/product/product.action';
import * as fromProducts from '@store/product/product.selector';
import { Store, select } from '@ngrx/store';
import { State as ProductState } from '@store/product/product.state';
import { ValidationService } from '@services/validation.service';
import { ProductService } from '@services/product.service';
import { Types } from 'mongoose';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit, OnDestroy {
  productId = '';
  product: Product | null = null;
  productForm: FormGroup | undefined;
  unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productStore: Store<ProductState>,
    private validationService: ValidationService,
    private productService: ProductService,
  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribeAll$)).subscribe(resp => {
      this.productId = resp['productId'];
      if(this.productId === '0') {
        this.createProductForm();
      } else {
        this.productStore.dispatch(new productActions.ProductLoadById(this.productId));
      }
    });
    
    this.productStore.pipe(takeUntil(this.unsubscribeAll$), select(fromProducts.productToUpdate)).subscribe(resp => {
      this.product = resp;
      this.createProductForm();
    });

    this.productStore.pipe(takeUntil(this.unsubscribeAll$), select(fromProducts.isLoading)).subscribe(resp => {
      this.isLoading = resp;
    });
  }

  createProductForm() {
    this.productForm = this.fb.group({
      id: [this.product?.id || new Types.ObjectId().toHexString(), [Validators.required]],
      name: [this.product?.name, [Validators.required]],
      model: [this.product?.model, [Validators.required]],
      brand: [this.product?.brand, [Validators.required]],
      price: [this.product?.price || 0, [Validators.required]],
      lotNo: [this.product?.lotNo, []],
    })
  }

  save() {
    if(this.productForm?.invalid) {
      this.validationService.validateAllFormFields(this.productForm);
      return;
    }

    if(this.productId === '0') {
      this.productService.createProduct(this.productForm?.value).pipe(take(1)).subscribe(resp => {
        this.productStore.dispatch(new productActions.ProductLoad());
        this.close();
      });
    } else {
      this.productService.updateProduct(this.productForm?.value).pipe(take(1)).subscribe(resp => {
        this.productStore.dispatch(new productActions.ProductLoad());
        this.productStore.dispatch(new productActions.UpdateProduct(null));
        this.close();
      });
    }
  }

  get name(): UntypedFormControl {
    return this.productForm?.get('name') as UntypedFormControl;
  }
  get model(): UntypedFormControl {
    return this.productForm?.get('model') as UntypedFormControl;
  }
  get brand(): UntypedFormControl {
    return this.productForm?.get('brand') as UntypedFormControl;
  }
  get price(): UntypedFormControl {
    return this.productForm?.get('price') as UntypedFormControl;
  }
  get lotNo(): UntypedFormControl {
    return this.productForm?.get('lotNo') as UntypedFormControl;
  }
  
  close() {
    this.router.navigate([{ outlets: { sb1: null } }]);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }
}
