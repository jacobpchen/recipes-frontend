import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App"
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from './context/UserContext'
import "./index.css";

import Reducer from './reducers'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())} >
      <ApolloProvider client={client}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ApolloProvider>
    </Provider>
  </Router>,

  document.getElementById("root")
);