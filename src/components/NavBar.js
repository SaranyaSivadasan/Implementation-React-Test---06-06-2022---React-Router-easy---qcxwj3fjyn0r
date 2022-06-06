import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a class="index-link" href="/">
            First
          </a>
        </li>
        <li>
          <a class="home-link" href="/home">
            Second
          </a>
        </li>
      </ul>
    </nav>
  );
};
