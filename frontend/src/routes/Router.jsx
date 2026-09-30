import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layout/MainLayout';

const  mainRoutes = [

    {path: "/", element: <Home/>}

] ;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;