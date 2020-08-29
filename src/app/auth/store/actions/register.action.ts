import { createAction, props } from '@ngrx/store';
import { IRegisterRequest } from '../../../shared/interfaces/registerRequest.interface';
import { ActionTypes } from './../actionTypes';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<IRegisterRequest>()
);
