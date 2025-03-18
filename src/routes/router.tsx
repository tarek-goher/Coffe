import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Make a Lazy-loading for pages
import { lazy } from "react";
import Error from "@/pages/Error/Error";
const Layout = lazy(() => import("@/layouts/MainLayout"));
const Home = lazy(() => import("@/pages/Home/Home"));
const OurStory = lazy(() => import("@/pages/Ourstory/OurStory"));
const CoffeSelect = lazy(() => import("@/pages/ourMenu/OurMenu"));
const Contact = lazy(() => import("@/pages/ContactUs/ContactUS"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/ourstory",
          element: <OurStory />,
        },
        {
          path: "/coffeselect",
          element: <CoffeSelect />,
        },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Router;
