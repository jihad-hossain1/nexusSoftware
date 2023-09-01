import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Works from "../pages/Works/Works";
import Technologies from "../pages/Technologies/Technologies";
import Services from "../pages/Services/Services";
import Company from "../pages/Company/Company";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contacts",
        element: <Contact></Contact>,
      },
      {
        path: "works",
        element: <Works></Works>,
      },
      {
        path: "technologies",
        element: <Technologies></Technologies>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "company",
        element: <Company></Company>,
      },
    ],
  },
]);
