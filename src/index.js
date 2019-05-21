import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import reducer from "./reducers/counter";

const store = createStore(reducer);

// store.subscribe(() => console.log("state updated!", store.getState()));

// //触发action
// store.dispatch({
//   type: "INCREMENT"
// });

const render = () => {
  ReactDOM.render(
    <App
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      value={store.getState()}
    />,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
