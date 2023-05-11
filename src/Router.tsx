// import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <Experience />,
      },
      {
        path: "/acco/:id",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
