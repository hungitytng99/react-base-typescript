/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { USER_TYPE } from 'app-configs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { LOGIN } from '../../saga/actions';
import reducer from '../../saga/reducer';
import saga from '../../saga/saga';

const key = 'login';

export default function LoginPage() {
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(LOGIN({
      email: "daotao.ai@hust.edu.vn",
      password: "123",
      type: USER_TYPE.INSTITUTION,
    }))
  }

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  return <div>
    <button onClick={handleLogin}>click</button>
  </div>;
}
