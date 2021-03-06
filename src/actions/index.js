import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  LOAD_USER
} from "../constants";
import axios from "axios";

export const increment = name => {
  return {
    type: INCREMENT,
    name //接收传递进来的参数
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

// 此处action变成一个函数，需要引入redux-thunk来处理
export const get_user = () => {
  //实现异步操作 redux-thunk
  // return dispatch => {
  //   // 请求loding的状态
  //   dispatch(fetch_user_request());
  //   axios
  //     .get("https://randomuser.me/api/")
  //     .then(res => {
  //       console.log(res.data.results[0]);
  //       //传递参数到下面的action
  //       dispatch(fetch_user(res.data.results[0]));
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // 传递到下面的请求失败的action
  //       dispatch(fetch_user_failure(error.response.data));
  //     });
  // };

  return {
    //发送异步请求时，插件自动生成三种action (LOAD_USER_FULFILLED(成功)，LOAD_USER_PENDING(加载中)，LOAD_USER_REJECTED(失败)) 不需要下面手动引入action
    type: LOAD_USER,
    //下面两种方式都可以，下面的可以加参数
    // payload: axios.get("https://randomuser.me/api/")
    payload: {
      promise: axios.get("https://randomuser.me/api/")
    }
  };
};

//用user接收参数，使用这个action来触发reducer，修改state
export const fetch_user = user => {
  return {
    type: FETCH_USER_SUCCESS,
    //user携带的就是请求回调的结果，触发reducer来修改state
    user
  };
};
// 请求发送的状态
export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

// 请求失败的状态
export const fetch_user_failure = error => {
  return {
    type: FETCH_USER_FAILURE,
    error
  };
};
