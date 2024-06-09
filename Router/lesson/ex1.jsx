import { Children } from "react";

const routes = [
  {
    path: "/",
    element: <SharedLayout></SharedLayout>,
    Children: [{ path: "add", element: <Example></Example> }],
  },
];

const App = () => {
  const router = createBrowserRouter(routes); // createBrowserRouter() accept array of routes, in exactly blueprint (see up).

  return <RouterProvider router={router} />;
};
