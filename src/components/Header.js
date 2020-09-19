import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Header = () => {
  return (
    <header className="w-full border-gray-300 text-gray-700 border-b-2 h-20 flex flex-row justify-around items-center">
      <div>
        <GatsbyLink to="/">marck.codes</GatsbyLink>
      </div>
      <nav className="w-64">
        <ul className="flex flex-row justify-between">
          <li>
            <GatsbyLink to="/">Home</GatsbyLink>
          </li>
          <li>
            <GatsbyLink to="/blog">Blog</GatsbyLink>
          </li>
          <li>
            <GatsbyLink to="/contact">Contact</GatsbyLink>
          </li>
        </ul>
      </nav>
      <div>Search | Login</div>
    </header>
  );
};

export default Header;
