import * as React from 'react';
import App from 'next/app';
import store from '../redux/store';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import { Provider } from 'react-redux';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} key={router.route} />
      </Provider>
    );
  }
}
