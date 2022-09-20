/**
 * Gets the repositories of the user from Github
 */

import { REQUEST_STATE, TOKEN_KEY, USER_TYPE } from 'app-configs';
import { ResponseTemplate } from 'app-data/fetch';
import { apiLogin, LoginBody, LoginResponse } from 'app-data/user';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_FAIL, LOGIN_SUCCESS } from './actions';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import ActionTypes from './constants';

/**
 * Github repos request/response handler
 */
export function* login(action: { type: string; payload: LoginBody }) {
  const { email, password, type } = action.payload;
  try {
    const response: ResponseTemplate<LoginResponse> = yield call(apiLogin, {
      email: email,
      password: password,
      type: type,
    });
    if (response.state === REQUEST_STATE.SUCCESS) {
      yield put(
        LOGIN_SUCCESS({ accessToken: response?.data?.accessToken ?? '' }),
      );
    }

    if (response.state === REQUEST_STATE.ERROR) {
      yield put(LOGIN_FAIL());
    }
  } catch (error) {
    console.log('=> Error at login function: .', error);
  }
}

export default function* githubData() {
  yield takeLatest(ActionTypes.LOGIN, login);
}
