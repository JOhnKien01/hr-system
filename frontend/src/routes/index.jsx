import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

import PublicRoute from "../routes/publicroute";
import ProtectedRoute from "../routes/protectedroute";
import MainLayout from "../layout/mainlayout";


export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },

  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },

          {
            path: "/not-found",
            element: <NotFound />,
          }

          // Add more pages here
          // {
          //   path: "/employees",
          //   element: <Employees />,
          // },
        ],
      },
    ],
  },

  // Catch all unknown routes
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);