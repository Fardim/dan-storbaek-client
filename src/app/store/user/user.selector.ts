import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";


export const USER_MODULE_STATE_NAME = 'userModule';
const getUserModuleState = createFeatureSelector<UserState>(USER_MODULE_STATE_NAME);

export const getUserList = createSelector(getUserModuleState, (state) => state.userList);
export const isLoading = createSelector(getUserModuleState, (state) => state.loading);
export const userToCreate = createSelector(getUserModuleState, (state) => state.userToCreate);
export const userToUpdate = createSelector(getUserModuleState, (state) => state.userToUpdate);