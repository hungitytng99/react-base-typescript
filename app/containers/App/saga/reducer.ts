import { REQUEST_STATE } from 'app-configs';
import { combineReducers } from 'redux';
import { ContainerActions, ContainerState } from '../redux-types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  user: null,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
export default (
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState => {
  switch (action.type) {
    case ActionTypes.CHECK_VALID_TOKEN: {
      return {
        user: {
          authState: REQUEST_STATE.REQUEST,
        },
      };
    }
    case ActionTypes.CHECK_VALID_TOKEN_SUCCESS: {
      return {
        user: {
          ...action.payload,
          authState: REQUEST_STATE.SUCCESS,
        },
      };
    }
    case ActionTypes.CHECK_VALID_TOKEN_FAIL: {
      return {
        user: {
          authState: REQUEST_STATE.ERROR,
        },
      };
    }
    case ActionTypes.RESET_CHECK_VALID_TOKEN: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
