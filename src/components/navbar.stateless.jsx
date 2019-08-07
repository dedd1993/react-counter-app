import React from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log("%c Navbar - Rendered", 'background: #222; color: pink');

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
