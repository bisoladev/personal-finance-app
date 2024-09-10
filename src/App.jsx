import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <HomeLayout />,
    children: [{ path: "overview", element: <Overview />, index: true }],
    errorElement: <Error />,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/transactions", element: <Transactions /> },
  { path: "/budgets", element: <Budgets /> },
  { path: "/pots", element: <Pots /> },
  { path: "/recurring", element: <Recurring /> },
  { path: "/profile", element: <Profile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
