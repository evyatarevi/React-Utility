// Summary
// The router instance contains your routes and manages navigation and history.
// RouterProvider provides the routing context to your application, making the router instance available to all components.
// Components like Link and hooks like useNavigate use this context to perform navigation.
// When the URL changes, the router instance matches the new URL to the correct route and renders the associated component.

// Routing Context:

// RouterProvider sets up a context that provides the router instance and its configuration to all the components within your application.
// This context allows components to access the current route, navigate to different routes, and access route parameters.
// Navigation and Route Matching:

// When the application starts, RouterProvider reads the current URL and uses the router instance to match it against the defined routes.
// The matched route’s component (or element) is rendered.
// For example, if the URL is /about, the About component is rendered.
// Navigating Between Routes:

// React Router provides components like Link and hooks like useNavigate to perform navigation.
// Link is a component that renders an anchor tag (<a>) and updates the URL when clicked, triggering a re-evaluation of the routes.

// How Navigation Works
// Link Component:

// When a user clicks on a Link component, React Router intercepts the click event, preventing the default browser behavior of navigating to a new page.
// Instead, it uses the router instance to update the history stack and the URL, triggering a re-render of the application with the new route.
// useNavigate Hook:

// The useNavigate hook provides a programmatic way to navigate.
// When you call navigate('/about'), React Router updates the URL and the history stack, causing the application to render the component associated with the /about route.

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useNavigate,
} from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const router = createBrowserRouter(routes);

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <button onClick={() => navigate("/about")}>Go to About</button>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <RouterProvider router={router}>
      <Navigation />
    </RouterProvider>
  );
};

export default App;
