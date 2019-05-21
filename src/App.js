import React from "react";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="container">
      <h1 className="jumbotron-heading text-center">{props.value}</h1>
      <p className="text-center">
        <button onClick={props.onIncrement} className="btn btn-primary mr-2">
          Increase
        </button>
        <button onClick={props.onDecrement} className="btn btn-danger my-2">
          Decrease
        </button>
      </p>
    </div>
  );
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
};

export default App;
