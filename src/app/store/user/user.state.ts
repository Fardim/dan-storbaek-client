import { AppState } from "@store/app.state";
import { UserState } from "./user.reducer";
import * as fromUser from './user.reducer';

export interface UserModuleState {
    users: UserState;
}

export interface State extends AppState {
    userModule: UserModuleState;
}

export const userReducers = {
    users: fromUser.reducer,
};