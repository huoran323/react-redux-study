import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment } from "./actions";

class App extends React.Component {
  render() {
    // const { dispatch } = this.props;
    //使用connect 添加mapDispatchToProps时，props中已经没有dispatch属性了, 而是变成了mapDispatchToProps中返回的属性(increment)
    const { increment } = this.props;

    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter} </h1>

        <p className="text-center">
          <button
            // 通过dispatch分发action,传递参数
            onClick={() => increment({ id: 2, name: "haha" })}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //此时，increment函数已经变成组件的props属性，解构此属性可直接进行函数调用
    increment: name => {
      dispatch(increment(name));
    }
  };
};

App.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
