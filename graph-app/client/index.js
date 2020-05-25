import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

const Root = () => {
  return <div>Started</div>;
};

ReactDOM.render(<Root />, document.querySelector("#root"));
