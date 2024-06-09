// In React Router (version 6 and above), the Outlet component is a special component used to render the child routes of a
//  parent route. It serves as a placeholder in the parent component's JSX where the matched child route components will be rendered.

// How Outlet Works
// When you define nested routes in your routing configuration, the Outlet component specifies where the child route's
// components should be rendered within the parent component's layout. This is particularly useful for creating layouts with
// common elements (like headers, footers, or sidebars) that should be shared across multiple routes.

import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* The Outlet component renders the child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

// Outlet Component:

// The Outlet component in the Layout component serves as a placeholder for the child routes.
// When the URL matches a child route (e.g., /about), the corresponding component (About in this case) is rendered in
// place of the Outlet.
