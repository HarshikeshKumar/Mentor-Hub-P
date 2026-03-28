import React from "react";
import Footer from "./Footer";
import { Nav } from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="w-full">
        <Nav />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full px-4 py-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
