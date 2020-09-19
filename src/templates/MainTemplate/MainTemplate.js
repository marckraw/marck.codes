import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainTemplate = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Helmet lang="pl" title="Hello Roman" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
