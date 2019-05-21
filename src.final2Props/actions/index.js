import { INCREMENT, DECREMENT } from "../constants";

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
