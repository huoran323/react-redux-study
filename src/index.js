import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { increment, decrement } from "./actions";

import { Provider } from "react-redux";

// 以下是手写中间件，也可以引用redux-logger来引用中间件
// 创建中间件，监控action的流程(日志打印)
const logger = store => next => action => {
  console.log("dispatching...", action);
  //next方法调用下一个中间件，当前状态就是调用error的中间件
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

// 创建中间件
const error = store => next => action => {
  try {
    next(action);
  } catch (e) {
    console.log("error", e);
  }
};

const store = createStore(rootReducer, applyMiddleware(logger, error));

ReactDOM.render(
  <Provider store={store}>
    {/* 正常项目不会这么传值，使用context上写文的方式 */}
    {/* <App store={store} /> */}

    <App />
  </Provider>,
  document.getElementById("root")
);

// ---------------redux----------------

// store.subscribe(() => console.log("state updated!", store.getState()));

// //触发action
// store.dispatch({
//   type: "INCREMENT"
// });

// const render = () => {
//   ReactDOM.render(
//     <App
//       onIncrement={() => store.dispatch(increment())}
//       onDecrement={() => store.dispatch(decrement())}
//       value={store.getState()}
//     />,
//     document.getElementById("root")
//   );
// };

// render();

// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
