import React from "react";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link,
  Navigate,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./output.css";
import Landing from "./pages/Landing";
import Sponsors from "./pages/Sponsors";

import NavigateExternal from "./components/NavigateExternal";

// Use window.location.href

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/sponsors",
      element: <Sponsors />,
    },
    {
      path: "/discord",
      element: <NavigateExternal to="https://discord.com/invite/Pw3NmhCF6U" />,
    },
  ],
  {},
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
