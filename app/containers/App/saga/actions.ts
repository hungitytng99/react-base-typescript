import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { UserInfo } from './types';

export const CHECK_VALID_TOKEN = (token: string) =>
  action(ActionTypes.CHECK_VALID_TOKEN, token);
export const CHECK_VALID_TOKEN_SUCCESS = (data: UserInfo) =>
  action(ActionTypes.CHECK_VALID_TOKEN_SUCCESS, data);
export const CHECK_VALID_TOKEN_FAIL = () =>
  action(ActionTypes.CHECK_VALID_TOKEN_FAIL);
export const RESET_CHECK_VALID_TOKEN = () =>
  action(ActionTypes.RESET_CHECK_VALID_TOKEN);
