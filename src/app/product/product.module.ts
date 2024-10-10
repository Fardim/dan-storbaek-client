import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducers } from '@store/product/product.state';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PRODUCT_MODULE_STATE_NAME } from '@store/product/product.selector';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from '@store/product/product.effect';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(PRODUCT_MODULE_STATE_NAME, productReducers.products),
    EffectsModule.forFeature([ProductEffect]),
  ]
})
export class ProductModule { }
