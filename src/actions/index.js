import { INCREMENT, DECREMENT, FETCH_USER_SUCCESS } from "../constants";
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
  //实现异步操作
  return dispatch => {
    axios
      .get("https://randomuser.me/api/")
      .then(res => {
        console.log(res.data.results[0]);
        //传递参数到下面的action
        dispatch(fetch_user(res.data.results[0]));
      })
      .catch(error => {
        console.log(error);
      });
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
