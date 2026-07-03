import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Maths from "./pages/Maths";
import "./App.css"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/maths",
          element: <Maths />,
        },
      ],
    },
  ],
  { basename: "/personal-website" }
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;