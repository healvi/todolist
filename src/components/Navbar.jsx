import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div
        className="container navbar-header d-flex align-items-center"
        data-cy="header-background"
      >
        <h2 data-cy="header-title">TO DO LIST APP</h2>
      </div>
    </nav>
  );
};

export default Navbar;
