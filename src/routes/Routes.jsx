import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraftList from "../pages/MyCraftList/MyCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCrafts",
        element: <AllCrafts></AllCrafts>
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>
      },
      {
        path: "/myCraftList",
        element: <MyCraftList></MyCraftList>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);
export default router;
