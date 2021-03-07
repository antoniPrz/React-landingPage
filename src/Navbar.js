import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="nav bg-dark text-white justify-content-end px-4">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
