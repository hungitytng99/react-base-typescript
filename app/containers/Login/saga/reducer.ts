import { REQUEST_STATE, TOKEN_KEY } from 'app-configs';
import { combineReducers } from 'redux';
import { ContainerActions, ContainerState } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loginState: undefined,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
export default (
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        loginState: REQUEST_STATE.REQUEST,
      };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      localStorage.setItem(TOKEN_KEY, action.payload?.accessToken ?? "");
      return {
        loginState: REQUEST_STATE.SUCCESS,
      };
    }
    case ActionTypes.LOGIN_FAIL: {
      return {
        loginState: REQUEST_STATE.ERROR,
      };
    }
    case ActionTypes.RESET_LOGIN: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
