// 定义一个函数 初始化reducer
const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
