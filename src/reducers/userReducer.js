const initialState = {
  isFetching: false, //请求状态
  error: null,
  user: {}
};

// redux-thunk异步请求
// const userReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case "FETCH_USER_SUCCESS":
//       return {
//         isFetching: false,
//         error: null,
//         user: action.user
//       };
//     // 请求loading的状态
//     case "FETCH_USER_REQUEST":
//       return {
//         isFetching: true,
//         error: null,
//         user: {}
//       };
//     // 请求失败的状态
//     case "FETCH_USER_FAILURE":
//       return {
//         isFetching: false,
//         error: action.error,
//         user: {}
//       };
//     default:
//       return state;
//   }
// };

// 第三方中间件redux-promise-middleware
const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //以下action.type是插件自动衍生出来的，不是自己定义的
    case "LOAD_USER_FULFILLED":
      return {
        isFetching: false,
        error: null,
        user: action.payload.data.results[0]
      };
    // 请求loading的状态
    case "LOAD_USER_PENDING":
      return {
        isFetching: true,
        error: null,
        user: {}
      };
    // 请求失败的状态
    case "LOAD_USER_REJECTED":
      return {
        isFetching: false,
        error: action.payload.response.data,
        user: {}
      };
    default:
      return state;
  }
};

export default userReducer;
