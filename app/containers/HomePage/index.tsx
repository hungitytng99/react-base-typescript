/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { changeUsername } from './saga/actions';
import { makeSelectUsername } from './saga/selectors';
import reducer from './saga/reducer';
import saga from './saga/saga';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const key = 'home';

export default function HomePage() {
  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  return <article><FormattedMessage {...messages.startProjectHeader} /></article>;
}
