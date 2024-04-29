import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraftList from "../pages/MyCraftList/MyCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CraftViewDetails from "../pages/CraftViewDetails/CraftViewDetails";
import UpdateMyCraft from "../pages/MyCraftList/UpdateMyCraft";
import MatchSubcategory from "../pages/MatchSubcategory/MatchSubcategory";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/allCrafts",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCraftList",
        element: (
          <PrivateRoute>
            <MyCraftList></MyCraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><CraftViewDetails></CraftViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/updateMyCraft/:id",
        element: <PrivateRoute><UpdateMyCraft></UpdateMyCraft></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/matchSubcategory/:subcategory",
        element: <MatchSubcategory></MatchSubcategory>
      }
    ],
  },
]);
export default router;
