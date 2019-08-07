import React, { Component } from "react";

// Stateless Functional Component
class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log("%c Navbar - constructor", 'background: #222; color: pink', this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("%c Navbar - Updated", 'background: #222; color: pink', prevProps, prevState);
  }

  componentDidMount() {
    console.log("%c Navbar - Mounted", 'background: #222; color: pink');
  }

  render() {
    console.log("%c Navbar - Rendered", 'background: #222; color: pink');

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
};

export default Navbar;
