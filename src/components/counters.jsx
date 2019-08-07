import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    console.log("%c Counters - constructor", 'background: #222; color: cyan', this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("%c Counters - Updated", 'background: #222; color: cyan', prevProps, prevState);
  }

  componentDidMount() {
    console.log("%c Counters - Mounted", 'background: #222; color: cyan');
  }

  render() {
    console.log("%c Counters - Rendered", 'background: #222; color: cyan');

    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div className="counters">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
