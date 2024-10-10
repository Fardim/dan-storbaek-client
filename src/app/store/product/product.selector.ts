import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";


export const PRODUCT_MODULE_STATE_NAME = 'productModule';
const getProductModuleState = createFeatureSelector<ProductState>(PRODUCT_MODULE_STATE_NAME);

export const getProductList = createSelector(getProductModuleState, (state) => state.productList);
export const isLoading = createSelector(getProductModuleState, (state) => state.loading);
export const productToUpdate = createSelector(getProductModuleState, (state) => state.productToUpdate);