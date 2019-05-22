const initialState = {
  isFetching: false, //请求状态
  error: null,
  user: {}
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        isFetching: false,
        error: null,
        user: action.user
      };
    // 请求loading的状态
    case "FETCH_USER_REQUEST":
      return {
        isFetching: true,
        error: null,
        user: {}
      };
    // 请求失败的状态
    case "FETCH_USER_FAILURE":
      return {
        isFetching: false,
        error: action.error,
        user: {}
      };
    default:
      return state;
  }
};

export default userReducer;
