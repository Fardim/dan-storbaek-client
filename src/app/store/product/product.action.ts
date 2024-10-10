import { Product } from '@models/product.model';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    ProductLoad = '[Product] Load',
    ProductLoadSuccess = '[Product] Load Success',
    ProductLoading = '[Product] Loading',
    ProductLoadById = '[Product] Load By Id',
    ProductLoadByIdSuccess = '[Product] Load By Id Success',
    UpdateProduct = '[Product] Update',
    DeleteProduct = '[Product] Delete',
    ResetAll = '[Product] Reset All',
}


export class ProductLoad implements Action {
    readonly type = ProductActionTypes.ProductLoad;
    constructor() {}
}
export class ProductLoadSuccess implements Action {
    readonly type = ProductActionTypes.ProductLoadSuccess;
    constructor(public payload: Product[]) {}
}
export class ProductLoading implements Action {
    readonly type = ProductActionTypes.ProductLoading;
    constructor(public payload: boolean) {}
}
export class ProductLoadById implements Action {
    readonly type = ProductActionTypes.ProductLoadById;
    constructor(public payload: string) {}
}
export class ProductLoadByIdSuccess implements Action {
    readonly type = ProductActionTypes.ProductLoadByIdSuccess;
    constructor(public payload: Product) {}
}
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: Product | null) {}
}
export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;
    constructor(public payload: string) {}
}
export class ResetAll implements Action {
    readonly type = ProductActionTypes.ResetAll;
    constructor() {}
}

export type ProductActions =
    | ProductLoad
    | ProductLoadSuccess
    | ProductLoading
    | ProductLoadById
    | ProductLoadByIdSuccess
    | UpdateProduct
    | DeleteProduct
    | ResetAll;