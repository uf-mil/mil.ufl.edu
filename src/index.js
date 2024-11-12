import React from "react";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Link to="/about">This is a test!</Link>,
    },
  ],
  {},
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
