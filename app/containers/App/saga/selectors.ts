/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobalState = (state: ApplicationRootState) => state.global;
// const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectUser = () =>
  createSelector(selectGlobalState, state => state.user);

export { selectGlobalState, makeSelectUser };
