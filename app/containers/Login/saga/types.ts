import { REQUEST_STATE, USER_TYPE } from 'app-configs';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface LoginState {
  readonly loginState?: REQUEST_STATE;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = LoginState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
