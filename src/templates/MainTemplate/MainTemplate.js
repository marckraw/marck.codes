import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Helmet lang="pl" title="Hello Roman" />
      <header>This is header</header>
      {children}
      <footer>this is footer</footer>
    </div>
  );
};

export default MainTemplate;
