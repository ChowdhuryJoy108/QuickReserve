import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register"
import Login from "../pages/LogIn/Login";
import RoomDetails from "../components/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"register",
        element:<Register />

      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"rooms",
        element:<Rooms />
      },
      {
        path:"room/details/:id",
        element:<RoomDetails />
      },
      {
        path:"bookings",
        element:<PrivateRoutes>
          <MyBookings />
        </PrivateRoutes>
      }
    ],
  },
]);

export default router;
