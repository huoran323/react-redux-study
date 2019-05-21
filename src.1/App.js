import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* redux示例 */}
        {/* <h1 className="jumbotron-heading text-center">{props.value}</h1> */}

        {/* 正常项目不会这么操作，通过context上下文的形式 */}
        {/* <h1 className="jumbotron-heading text-center">
        {props.store.getState()}
      </h1> */}

        <h1 className="jumbotron-heading text-center">
          {this.context.store.getState()}
        </h1>

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

App.contextTypes = {
  store: PropTypes.object
};

// App.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// };

export default App;
