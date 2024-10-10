import { AppState } from "@store/app.state";
import { ProductState } from "./product.reducer";
import * as fromProduct from './product.reducer';

export interface ProductModuleState {
    products: ProductState;
}

export interface State extends AppState {
    productModule: ProductModuleState;
}

export const productReducers = {
    products: fromProduct.reducer,
};