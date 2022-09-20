/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from 'containers/HomePage/Loadable';
import GlobalStyle from '../../global-styles';
import LoginPage from 'containers/Login/pages/Login';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - B4E Issuer"
        defaultTitle="B4E Issuer"
      >
        <meta name="description" content="B4E Issuer" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth/login" component={LoginPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
export default hot(App);
