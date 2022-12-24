import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* sandwich menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 justify-items-end"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>API</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">tejas kamtam</a>
      </div>
      {/* navbar menu */}
      <div className="navbar-end hidden lg:flex mx-3">
        <ul className="menu menu-horizontal px-1 mx-3">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <a className="btn">résumé</a>
      </div>
    </div>
  );
}
