// import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import App from './containers/App/index';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './utils/global';
import theme from './utils/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>Computer Marketplace</title>
          <meta
            name="description"
            content="A simple computer marketplace where you can buy all your computer stuff here"
          />
        </Helmet>
        <App/>
        <GlobalStyle/>
      </Fragment>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
