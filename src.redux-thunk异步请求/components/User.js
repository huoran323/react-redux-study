import React from "react";
import { connect } from "react-redux";
// 导入action
import { get_user } from "../actions";

class User extends React.Component {
  render() {
    const { get_user, obj } = this.props;
    const { error, isFetching, user } = obj;

    let data;

    if (error) {
      data = error;
    } else if (isFetching) {
      data = "loading...";
    } else {
      data = user.email;
    }
    return (
      <div>
        <h1 className="jumbotron-heading text-center">{data}</h1>

        <p className="text-center">
          <button onClick={() => get_user()} className="btn btn-success  mr-2">
            GET RANDOM USER
          </button>
        </p>
      </div>
    );
  }
}

/**
 * //这是state.userReducer中包含的参数
  const initialState = {
        isFetching: false, //请求状态
        error: null,
        user: {}
    }; 
*/
//当前state中包含两个reducer, 分别是counter, userReducer
const mapStateToProps = state => {
  console.log("state --- ", state);
  return {
    obj: state.userReducer
  };
};
export default connect(
  mapStateToProps,
  { get_user }
)(User);
