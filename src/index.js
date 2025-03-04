import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./input.css";
import Landing from "./pages/Landing";
import Sponsors from "./pages/Sponsors";
import Apply from "./pages/Apply";
import Research from "./pages/Research";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Vehicles from "./pages/Vehicles";
import NotFound from "./pages/NotFound";
import LabInfo from "./pages/LabInfo";
import Team2024Page from "./pages/teams/2024";
import Alumni from "./pages/Alumni";

import NavigateExternal from "./components/NavigateExternal";

// Use window.location.href

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing />,
      errorElement: <NotFound />,
    },
    {
      path: "/sponsors",
      element: <Sponsors />,
    },
    {
      path: "/lab",
      element: <LabInfo />,
    },
    {
      path: "/apply",
      element: <Apply />,
    },
    {
      path: "/research",
      element: <Research />,
    },
    {
      path: "/vehicles",
      element: <Vehicles />,
    },
    {
      path: "/blog",
      element: <BlogList />,
    },
    {
      path: "/blog/:slug",
      element: <BlogPost />,
    },
    {
      path: "/team",
      element: <Team2024Page />,
    },
    {
      path: "/alumni",
      element: <Alumni />,
    },
    {
      path: "/discord",
      element: <NavigateExternal to="https://discord.com/invite/Pw3NmhCF6U" />,
    },
    {
      path: "/donate",
      element: (
        <NavigateExternal to="https://www.uff.ufl.edu/giving-opportunities/020149-machine-intelligence-lab/?appeal=GZAGTA7A1" />
      ),
    },
    {
      path: "/sponsor_packet",
      element: <NavigateExternal to="https://mil.ufl.edu/sponsorship.pdf" />,
    },
  ],
  {},
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
