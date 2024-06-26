import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Error from "../components/Error";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import InsideBlog from "../pages/InsideBlog";
import { element } from "prop-types";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <InsideBlog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
