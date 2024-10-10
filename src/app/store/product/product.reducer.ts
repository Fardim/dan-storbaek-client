import { Product } from "@models/product.model";
import { ProductActions, ProductActionTypes } from "./product.action";

export interface ProductState {
    productList: Product[];
    loading: boolean;
    productToUpdate: Product | null;
}

const initialState: ProductState = {
    productList: [],
    loading: false,
    productToUpdate: null,
}

export function reducer(state: ProductState | undefined = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ProductLoadSuccess:
            return {
                ...state,
                productList: action.payload,
            };
        case ProductActionTypes.ProductLoading:
            return {
                ...state,
                loading: action.payload,
            };
        case ProductActionTypes.UpdateProduct:
            return {
                ...state,
                productToUpdate: action.payload,
            };
        case ProductActionTypes.ResetAll:
            return {
                ...state,
                productList: [],
                loading: false,
                productToUpdate: null,
            };
        
        default:
            return state;
    }
}
