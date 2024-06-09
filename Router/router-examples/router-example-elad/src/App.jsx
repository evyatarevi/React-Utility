// src/App.jsx
import { Home, Login, NotFound, Profile, Register, Search } from "./pages";
import LoggedOffLayout from "./components/Layouts/LoggedOffLayout/LoggedOffLayout";
import LoggedInLayout from "./components/Layouts/LoggedInLayout/LoggedInLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokemon from "./pages/Pokemon/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoggedOffLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/app",
    element: <LoggedInLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path:"pokemon",
        element: <Pokemon/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
