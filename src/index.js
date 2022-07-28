import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configStore';
import  GlobalStyle  from './GlobalStyle';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ReactGA from 'react-ga';

import "swiper/css/bundle";
import ScrollToTop from './shared/ScrollToTop';

Sentry.init({
  dsn: "https://fd9472babf814cc9ae0ae1173aaa4b23@o1332774.ingest.sentry.io/6597660",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;
ReactGA.initialize(TRACKING_ID)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <ScrollToTop/>
        <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
