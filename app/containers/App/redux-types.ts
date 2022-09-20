import { REQUEST_STATE } from 'app-configs';
import { ActionType } from 'typesafe-actions';
import * as actions from './saga/actions';
import { UserInfo } from './saga/types';

/* --- STATE --- */

interface AppState {
  
  readonly user?: UserInfo | null;
  readonly authState?: REQUEST_STATE;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = AppState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
