import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <main>
      
        <Header />
  

      <div>{children}</div>

      <Footer />
    </main>
  );
}

export default Layout;
