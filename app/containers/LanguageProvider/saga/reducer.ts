/*
 *
 * LanguageProvider reducer
 *
 */
import { DEFAULT_LOCALE } from 'locales';
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  locale: DEFAULT_LOCALE,
};

function languageProviderReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
}
export default languageProviderReducer;
