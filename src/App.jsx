import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Recipe, Recipes } from "./pages";
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },

        {
          path: "/recipes/:id",
          element: <Recipe />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
