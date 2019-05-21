import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment } from "./actions";

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter} </h1>

        <p className="text-center">
          <button
            // 通过dispatch分发action,传递参数
            onClick={() => dispatch(increment({ id: 1, name: "haha" }))}
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

App.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(App);
