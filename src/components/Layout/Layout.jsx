import React from "react";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

function Layout({ children }) {
  return (
    <div>
      <NavigationMenu />
      <div className="mt-16">{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout;
