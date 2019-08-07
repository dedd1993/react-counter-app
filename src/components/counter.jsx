import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("%c Counter - constructor", 'background: #222; color: #f9551a', this.props);
  }

  componentWillUnmount() {
    console.log("%c Counter - Unmount", 'background: #222; color: #f9551a');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("%c Counter - Updated", 'background: #222; color: #f9551a', prevProps, prevState);
  }

  componentDidMount() {
    console.log("%c Counter - Mounted", 'background: #222; color: #f9551a');
  }

  render() {
    console.log("%c Counter - Rendered", 'background: #222; color: #f9551a');

    return (
      <div className="counter">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
