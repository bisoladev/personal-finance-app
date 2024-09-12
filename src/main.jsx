import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import {
  HomeLayout,
  Budgets,
  Error,
  Login,
  Overview,
  Pots,
  Profile,
  Recurring,
  Register,
  Transactions,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: () => {
      return redirect("/app/overview");
    },
  },
  {
    path: "app",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "transactions", element: <Transactions /> },
      { path: "budgets", element: <Budgets /> },
      { path: "pots", element: <Pots /> },
      { path: "recurring", element: <Recurring /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "login", element: <Login />, errorElement: <Error /> },
  { path: "register", element: <Register />, errorElement: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
