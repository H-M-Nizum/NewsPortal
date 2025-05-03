import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/auth",
    element: <div>Auth Layout</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
