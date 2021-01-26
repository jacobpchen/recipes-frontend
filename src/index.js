import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App"
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from './context/UserContext'
import "./index.css";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ApolloProvider>
  </Router>,

  document.getElementById("root")
);