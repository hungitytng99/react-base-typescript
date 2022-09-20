import { REQUEST_STATE, TOKEN_KEY } from 'app-configs';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  CHECK_VALID_TOKEN,
  CHECK_VALID_TOKEN_FAIL,
} from 'containers/App/saga/actions';
import { selectGlobalState } from 'containers/App/saga/selectors';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, location, ...rest }) {
  const dispatch = useDispatch();
  const isAuthencate = useSelector(selectGlobalState).authState;
  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem(TOKEN_KEY);
      if (accessToken !== null) {
        if (isAuthencate !== REQUEST_STATE.SUCCESS) {
          dispatch(CHECK_VALID_TOKEN(accessToken));
        }
      } else {
        dispatch(CHECK_VALID_TOKEN_FAIL());
      }
    })();
  }, [dispatch]);
  switch (isAuthencate) {
    case REQUEST_STATE?.SUCCESS:
      return <Route {...rest} render={props => <Component {...props} />} />;
    case REQUEST_STATE?.ERROR:
      return (
        <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
      );
    default:
      return <LoadingIndicator />;
  }
}

export default PrivateRoute;
