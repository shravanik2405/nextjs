import * as React from "react";
import App from "next/app";
import "../node_modules/bootstrap/scss/bootstrap.scss";
export default class MyApp extends App {
  public render() {
    const { Component, pageProps, router } = this.props;
    return <Component {...pageProps} key={router.route} />;
  }
}
