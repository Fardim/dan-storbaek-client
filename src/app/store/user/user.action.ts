import { User } from '@models/user.model';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
    UserLoad = '[User] Load',
    UserLoadSuccess = '[User] Load Success',
    UserLoading = '[User] Loading',
    UserLoadById = '[User] Load By Id',
    UserLoadByIdSuccess = '[User] Load By Id Success',
    CreateUser = '[User] Create',
    UpdateUser = '[User] Update',
    DeleteUser = '[User] Delete',
    ResetAll = '[User] Reset All',
}

export class UserLoad implements Action {
    readonly type = UserActionTypes.UserLoad;
    constructor() {}
}
export class UserLoadSuccess implements Action {
    readonly type = UserActionTypes.UserLoadSuccess;
    constructor(public payload: User[]) {}
}
export class UserLoading implements Action {
    readonly type = UserActionTypes.UserLoading;
    constructor(public payload: boolean) {}
}
export class UserLoadById implements Action {
    readonly type = UserActionTypes.UserLoadById;
    constructor(public payload: string) {}
}
export class UserLoadByIdSuccess implements Action {
    readonly type = UserActionTypes.UserLoadByIdSuccess;
    constructor(public payload: User) {}
}
export class CreateUser implements Action {
    readonly type = UserActionTypes.CreateUser;
    constructor(public payload: User) {}
}
export class UpdateUser implements Action {
    readonly type = UserActionTypes.UpdateUser;
    constructor(public payload: User | null) {}
}
export class DeleteUser implements Action {
    readonly type = UserActionTypes.DeleteUser;
    constructor(public payload: string) {}
}
export class ResetAll implements Action {
    readonly type = UserActionTypes.ResetAll;
    constructor() {}
}

export type UserActions =
    | UserLoad
    | UserLoadSuccess
    | UserLoading
    | UserLoadById
    | UserLoadByIdSuccess
    | CreateUser
    | UpdateUser
    | DeleteUser
    | ResetAll;