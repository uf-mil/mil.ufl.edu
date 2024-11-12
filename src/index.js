import React from "react";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import Landing from "./pages/Landing";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing />,
    },
  ],
  {},
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
