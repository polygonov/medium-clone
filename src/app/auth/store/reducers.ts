import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../interfaces/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: IAuthState = {
    isSubmitting: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): IAuthState => ({ ...state, isSubmitting: true })
    )
);

export function reducers(state: IAuthState, action: Action): IAuthState {
    return authReducer(state, action);
}
