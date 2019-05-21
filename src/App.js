import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>

        <p className="text-center">
          <button
            onClick={this.props.onIncrement}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={this.props.onDecrement}
            className="btn btn-danger my-2"
          >
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(App);
