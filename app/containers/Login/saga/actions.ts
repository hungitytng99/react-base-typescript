import { LoginBody, LoginResponse } from 'app-data/user';
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const LOGIN = (body: LoginBody) => action(ActionTypes.LOGIN, body);
export const LOGIN_SUCCESS = (accessToken: LoginResponse) => action(ActionTypes.LOGIN_SUCCESS, accessToken);
export const LOGIN_FAIL = () => action(ActionTypes.LOGIN_FAIL);
export const RESET_LOGIN = () => action(ActionTypes.RESET_LOGIN);
