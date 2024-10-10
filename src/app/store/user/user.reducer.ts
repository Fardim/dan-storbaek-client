import { User } from "@models/user.model";
import { UserActions, UserActionTypes } from "./user.action";
import { unionBy } from 'lodash';

export interface UserState {
    userList: User[];
    loading: boolean;
    userToUpdate: User | null;
    userToCreate: User | null;
}

const initialState: UserState = {
    userList: [],
    loading: false,
    userToUpdate: null,
    userToCreate: null,
}


export function reducer(state: UserState | undefined = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.UserLoadSuccess:
            return {
                ...state,
                userList: action.payload,
            };
        case UserActionTypes.UserLoading:
            return {
                ...state,
                loading: action.payload,
            };
        case UserActionTypes.UpdateUser:
            return {
                ...state,
                userToUpdate: action.payload,
            };
        case UserActionTypes.ResetAll:
            return {
                ...state,
                userList: [],
                loading: false,
                userToUpdate: null,
                userToCreate: null,
            };
        
        default:
            return state;
    }
}
