import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
